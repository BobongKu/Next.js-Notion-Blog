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

  try {
    const recordMap = await notions.getPage(postId);
    return {
      props: {
        recordMap
      },
      revalidate: 1,
    };
  } catch (error) {
    // Notion 페이지가 존재하지 않는 경우 빈 객체를 반환합니다.
    return {
      notFound: true,
    };
  }
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
      fallback: false,
    };
  }