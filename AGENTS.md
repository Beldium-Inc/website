
- SEO landing pages are data-driven: add entries to src/data/solutionPages.ts (routes, nav, footer, related strips derive from it). Why: one source avoids route/sitemap/nav drift.
- Static head tags in index.html carry data-rh="true" so react-helmet-async replaces them. Why: prevents duplicate description/og tags.
