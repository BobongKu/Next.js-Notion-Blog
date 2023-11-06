import Layout from "../../components/layout";
import Head  from 'next/head';
import Link from "next/link";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { DATABASE,KEY } from "../../config";
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from "react-notion-x";
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'


const { Client } = require("@notionhq/client")
const notion = new Client({ auth: KEY });
const notions = new NotionAPI()



export default function Post({recordMap}) {

    const { theme } = useTheme()

    return (
        <Layout>
            <div className="min-h-screen">
                <Head>
                    <title>Bobong</title>
                    <meta name="description" content="Bobong's Portfolio"/>
                </Head>

                <NotionRenderer disableHeader recordMap={recordMap} fullPage={true} darkMode={theme === 'dark'}
                  components={{
                    nextImage: Image,
                    nextLink: Link,
                    Code,
                    Collection,
                    Equation,
                    Modal
                }}/>

            </div>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const postId = params.id;

    const recordMap = await notions.getPage(postId)
    // Fetch the post data from a CMS or database.

    // Return the post data as props to the page.
    return {
      props: {
        recordMap
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