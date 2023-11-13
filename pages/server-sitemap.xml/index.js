import { getServerSideSitemapLegacy } from "next-sitemap"

export const getServerSideProps = async ctx => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const fields = [
    {
      loc: "https://bobong.blog", // Absolute url
      lastmod: new Date().toISOString()
      // changefreq
      // priority
    },
    {
      loc: "https://bobong.blog/post", // Absolute url
      lastmod: new Date().toISOString()
      // changefreq
      // priority
    }
  ]

  return getServerSideSitemapLegacy(ctx, fields)
}
