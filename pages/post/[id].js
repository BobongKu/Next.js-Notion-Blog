import Layout from "../../components/layout";
import Head  from 'next/head';
import rehypeRaw from 'rehype-raw'
import { DATABASE,KEY } from "../../config";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";


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

                <div>
                    <Markdown className="prose lg:prose-xl dark:prose-invert" components={{
                    p: ({ node, children }) => {
                        if (node.children[0].tagName === "img") {
                            const image: any = node.children[0];
                            return (
                                <div className="image">
                                    <Image
                                        src={`/images/${image.properties.src}`}
                                        alt={image.properties.alt}
                                        width="600"
                                        height="300"
                                    />
                                </div>
                            );
                        }
                        // Return default child if it's not an image
                        return <p>{children}</p>;
                    },
                }}>
                    {markdown}
                    </Markdown>
                </div>
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