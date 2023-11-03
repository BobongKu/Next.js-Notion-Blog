import Layout from "../components/layout";
import Head  from 'next/head';
import { NOTION_DATABASE_ID,NOTION_API_KEY } from '../config/index'
import ProjectItem from "../components/projects/project-item";

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: NOTION_API_KEY });

export default function Projects({projects}) {

    return(
        <Layout>
          <div  className="flex flex-col items-center justify-center min-h-screen px-5 py-10 mb-10">
            <Head>
                <title>Bobong</title>
                <meta name="description" content="Bobong's Portfolio" />
            </Head>
            <h1 className="text-4xl font-bold sm:text-6xl">
              Projects
            </h1>

            <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2  py-10 m-6 gap-8 ">
              {projects.results.map((project, index) => (
                id={index},
                <ProjectItem data={project}/>
              ))}
            </div>
          </div>
        </Layout>
    )
}

export async function getStaticProps() {

    const databaseId = NOTION_DATABASE_ID;
    const projects = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: '이름',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    });


    return {
        props: {projects},
    }
}