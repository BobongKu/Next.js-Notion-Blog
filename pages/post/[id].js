import Layout from "../../components/layout";
import Head  from 'next/head';
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from "react-notion-x";
import { KEY } from '../../config/index'


const { Client } = require('@notionhq/client');
const notion = new Client({ auth: KEY });

const notions = new NotionAPI()

export default function Post({recordMap,page}) {

    const { theme } = useTheme()

import('react-notion-x/build/third-party/code').then(async (m) => {
  // additional prism syntaxes
  await Promise.all([
    import('prismjs/components/prism-markup-templating.js'),
    import('prismjs/components/prism-markup.js'),
    import('prismjs/components/prism-bash.js'),
    import('prismjs/components/prism-c.js'),
    import('prismjs/components/prism-cpp.js'),
    import('prismjs/components/prism-csharp.js'),
    import('prismjs/components/prism-docker.js'),
    import('prismjs/components/prism-java.js'),
    import('prismjs/components/prism-js-templates.js'),
    import('prismjs/components/prism-coffeescript.js'),
    import('prismjs/components/prism-diff.js'),
    import('prismjs/components/prism-git.js'),
    import('prismjs/components/prism-go.js'),
    import('prismjs/components/prism-graphql.js'),
    import('prismjs/components/prism-handlebars.js'),
    import('prismjs/components/prism-less.js'),
    import('prismjs/components/prism-makefile.js'),
    import('prismjs/components/prism-markdown.js'),
    import('prismjs/components/prism-objectivec.js'),
    import('prismjs/components/prism-ocaml.js'),
    import('prismjs/components/prism-python.js'),
    import('prismjs/components/prism-reason.js'),
    import('prismjs/components/prism-rust.js'),
    import('prismjs/components/prism-sass.js'),
    import('prismjs/components/prism-scss.js'),
    import('prismjs/components/prism-solidity.js'),
    import('prismjs/components/prism-sql.js'),
    import('prismjs/components/prism-stylus.js'),
    import('prismjs/components/prism-swift.js'),
    import('prismjs/components/prism-wasm.js'),
    import('prismjs/components/prism-yaml.js')
  ])
  return m.Code
})


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

    const title = page.properties.이름.title[0].plain_text
    const description = page.properties.Description.rich_text[0].plain_text

    return (
        <Layout>
            <div className="min-h-screen">
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description}/>
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

export async function getServerSideProps({ params }) {

  const postId = params.id;

  const page = await notion.pages.retrieve({ page_id: postId });

  const hit = page.properties.Hits.number

  //Hits
  const response = await notion.pages.update({
    page_id: postId,
    properties: {
      'Hits': {
        number: hit+1,
      },
    },
  });

  // const validatePath = paths.some((path) => path.params.id === postId)
  try {
    const recordMap = await notions.getPage(postId);
    return {
      props: {
        recordMap,
        page,
      },
    };
  } catch (error) {
    // Notion 페이지가 존재하지 않는 경우 빈 객체를 반환합니다.
    return {
      notFound: true,
    };
  }
}