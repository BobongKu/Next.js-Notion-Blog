import Layout from "../../components/layout";
import Head  from 'next/head';
import rehypeRaw from 'rehype-raw'
import { DATABASE,KEY } from "../../config";
import remarkGfm from "remark-gfm";
import PostInfo from "../../components/post/post-info";


const { Client } = require("@notionhq/client")
const notion = new Client({ auth: KEY });
const { NotionToMarkdown } = require("notion-to-md")
const n2m = new NotionToMarkdown({ notionClient: notion });

export default function Post({mdString}) {

    const markdown = mdString.parent

    console.log(markdown)

    return (
        <Layout>
            <div className="min-h-screen">
                <Head>
                    <title>Bobong</title>
                    <meta name="description" content="Bobong's Portfolio"/>
                </Head>

                <PostInfo data={markdown}/>

            </div>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const postId = params.id;
  
    // Fetch the post data from a CMS or database.
    const mdblocks = await n2m.pageToMarkdown(postId)
    const mdString = n2m.toMarkdownString(mdblocks)

    // Return the post data as props to the page.
    return {
      props: {
        mdString,
      },
    };
  }

export async function getStaticPaths() {
    const databaseId = DATABASE;
    const projects = await notion.databases.query({
      database_id: databaseId,
    });

  
    const paths = projects.results.map((project) => {
      return {
        params: {
          id: project.id,
        },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  }