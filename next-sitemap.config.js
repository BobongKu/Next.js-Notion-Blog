/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://bobong.blog',
    generateRobotsTxt: true, // (optional)
    exclude: ['/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
    additionalSitemaps: [ 
      'https://bobong.blog/server-sitemap.xml', // <==== Add here 
    ],
    }
}