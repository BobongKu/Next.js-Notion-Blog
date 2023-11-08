import Layout from "../../components/layout";
import Head  from 'next/head';
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { PROJECT_DATABASE,KEY } from "../../config";
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from "react-notion-x";


const { Client } = require("@notionhq/client")
const notion = new Client({ auth: KEY });
const notions = new NotionAPI()



export default function Post({recordMap}) {

    const { theme } = useTheme()

    const Code = dynamic(() =>
      import('react-notion-x/build/third-party/code').then((m) => m.Code)
    )
    const Collection = dynamic(() =>
      import('react-notion-x/build/third-party/collection').then(
        (m) => m.Collection
      )
    )
    const Equation = dynamic(() =>
      import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
    )
    const Pdf = dynamic(
      () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
      {
        ssr: false
      }
    )
    const Modal = dynamic(
      () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
      {
        ssr: false
      }
    )
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
                    Modal,
                    Pdf
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
      revalidate: 10,
    };
  }

export async function getStaticPaths() {
    const projectDatabaseId = PROJECT_DATABASE;
    const projects = await notion.databases.query({
      database_id: projectDatabaseId,
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
      fallback: 'blocking',
    };
  }