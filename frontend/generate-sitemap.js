import { productsData } from './src/data/products.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const slugs = Object.keys(productsData);

const staticPages = [
  { loc: 'https://corevex.tech/', priority: '1.0', changefreq: 'weekly' },
  { loc: 'https://corevex.tech/solutions', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://corevex.tech/products', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://corevex.tech/work', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://corevex.tech/portfolio', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://corevex.tech/services', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://corevex.tech/about', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://corevex.tech/contact', priority: '0.9', changefreq: 'monthly' }
];

const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const page of staticPages) {
  xml += `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

// Generate sitemap entries for both /solutions/:slug and /products/:slug for full backward compatibility
for (const slug of slugs) {
  xml += `  <url>
    <loc>https://corevex.tech/solutions/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  xml += `  <url>
    <loc>https://corevex.tech/products/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

xml += `</urlset>
`;

const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml);
console.log(`Generated sitemap.xml with ${staticPages.length + (slugs.length * 2)} URLs at ${outputPath}`);
