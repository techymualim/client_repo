const { SitemapStream } = require('sitemap');

module.exports = {
  getStaticProps() {
    const sitemapStream = new SitemapStream();

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

    for (const link of links) {
      sitemapStream.write({
        loc: link,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1.0,
      });
    }

    sitemapStream.end();
    return {
      props: {
        sitemap: sitemapStream,
      },
    };
  },

  render() {
    return this.props.sitemap;
  },
};

