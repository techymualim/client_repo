import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async function generateSitemap(req, res) {
  try {
    const links = [
      'https://www.innoxbeta.com/',
      'https://www.innoxbeta.com/#how-it-works',
      'https://www.innoxbeta.com/marketplace',
      'https://www.innoxbeta.com/about',
      'https://www.innoxbeta.com/patent-showcase',
      'https://www.innoxbeta.com/learn',
      'https://www.innoxbeta.com/terms-of-service',
      'https://www.innoxbeta.com/privacy-policy',
      'https://www.innoxbeta.com/learn?topic=blockchain',
      'https://www.innoxbeta.com/learn?topic=creator-tokens',
      'https://www.innoxbeta.com/learn?topic=tokens',
      'https://www.innoxbeta.com/learn?topic=faqs',
    ];

    const sitemapStream = new SitemapStream({
      hostname: 'https://www.innoxbeta.com', // Replace with your website URL
    });

    for (const link of links) {
      sitemapStream.write({
        url: link,
        changefreq: 'daily',
        priority: 1.0,
      });
    }

    sitemapStream.end();
    const sitemap = await streamToPromise(Readable.from([sitemapStream]));

    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
