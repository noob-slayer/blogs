import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const base = 'https://noob-slayer.github.io/sidd';

  const urls = [
    { loc: `${base}/`, lastmod: new Date().toISOString() },
    ...posts.map(post => ({
      loc: `${base}/blog/${post.slug}/`,
      lastmod: post.data.pubDate.toISOString(),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.loc === `${base}/` ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
