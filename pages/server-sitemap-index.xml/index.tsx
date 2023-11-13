import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { PROJECT_DATABASE,POST_DATABASE,KEY } from "../../config";

const { Client } = require("@notionhq/client")
const notion = new Client({ auth: KEY });

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const postDatabaseId = POST_DATABASE;
  const posts = await notion.databases.query({
    database_id: postDatabaseId,
  });

  const projectDatabaseId = PROJECT_DATABASE;
  const projects = await notion.databases.query({
    database_id: projectDatabaseId,
  });

  const allDatabase = [...posts.results, ...projects.results]

  const fields = allDatabase.map((post) => {
    return{
      loc: `https://bobong.blog/post/${post.id}`,
      lastmod: post.updatedAt,
      // changefreq
      // priority
    }
  })

  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}