// Post-build prerendering: crawls the built SPA with a real browser and writes
// static HTML snapshots for each route, so search engines and link-preview
// bots (which don't execute JS) get fully-rendered content instead of an
// empty <div id="root">. The client bundle still hydrates normally on top.
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "serve-handler";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const sitemapPath = path.join(__dirname, "..", "public", "sitemap.xml");
const PORT = 4173;
const SITE_ORIGIN = "https://beldium.com";

function getRoutesFromSitemap() {
  const xml = readFileSync(sitemapPath, "utf-8");
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return matches.map((url) => url.replace(SITE_ORIGIN, "") || "/");
}

async function main() {
  // Process "/" last: it writes straight to dist/index.html, which the local
  // server also uses as its SPA fallback shell while crawling other routes.
  const routes = getRoutesFromSitemap().sort((a, b) => (a === "/" ? 1 : b === "/" ? -1 : 0));
  console.log(`Prerendering ${routes.length} route(s)...`);

  const server = createServer((req, res) =>
    handler(req, res, {
      public: distDir,
      cleanUrls: true,
      // The build only produces dist/index.html at this point (prerendered
      // route snapshots don't exist yet); fall back to it for every path,
      // mirroring the SPA rewrite rule used in production (public/_redirects).
      rewrites: [{ source: "**", destination: "/index.html" }],
    }),
  );
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      // Give react-helmet-async a tick to commit head tags after mount.
      await new Promise((resolve) => setTimeout(resolve, 150));

      const html = await page.content();
      await page.close();

      const outDir = route === "/" ? distDir : path.join(distDir, route);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(path.join(outDir, "index.html"), html);
      console.log(`  ✓ ${route}`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log("Prerendering complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
