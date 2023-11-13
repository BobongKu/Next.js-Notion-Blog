const createSitemap = () => {
    // Your dynamic sitemap generation logic here...
    const dynamicUrls = ['post']; // Replace with your dynamic URLs
  
    const sitemapItems = dynamicUrls.map((url) => ({
      loc: `https://bobong.blog/${url}`,
      lastmod: new Date().toISOString(),
    }));
  
    return sitemapItems;
  };
  
  const Sitemap = () => null; // This component should be empty
  
  export const getServerSideProps = async ({ res }) => {
    const sitemapItems = createSitemap();
  
    const sitemapXml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapItems
          .map(
            (item) => `<url>
          <loc>${item.loc}</loc>
          <lastmod>${item.lastmod}</lastmod>
        </url>`
          )
          .join('')}
      </urlset>
    `;
  
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemapXml);
    res.end();
  
    return {
      props: {},
    };
  };
  
  export default Sitemap;