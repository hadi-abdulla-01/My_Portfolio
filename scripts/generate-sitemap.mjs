import { writeFileSync } from "node:fs";

const SITE_URL = "https://hadiabdulla.in";
const routes = ["/"];
const lastmod = new Date().toISOString();

const urls = routes
  .map(
    (route) => `  <url>\n    <loc>${SITE_URL}${route === "/" ? "" : route}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${route === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync("public/sitemap.xml", sitemap);
console.log(`Generated public/sitemap.xml for ${SITE_URL}`);
