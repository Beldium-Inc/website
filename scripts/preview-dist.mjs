import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "serve-handler";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const port = process.env.PORT || 4500;

const server = createServer((req, res) => handler(req, res, { public: distDir, cleanUrls: true }));
server.listen(port, () => console.log(`Serving dist/ at http://localhost:${port}`));
