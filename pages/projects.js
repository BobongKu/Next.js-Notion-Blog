import Layout from "../components/layout";
import Head  from 'next/head';
import { DATABASE,KEY } from '../config/index'
import ProjectItem from "../components/projects/project-item";

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: KEY });

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
                <ProjectItem key={index} data={project}/>
              ))}
            </div>
          </div>
        </Layout>
    )
}

export async function getStaticProps() {

    const databaseId = DATABASE;
    const projects = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: '이름',
          direction: 'ascending',
        },
      ],
    });


    return {
        props: {projects},
    }
}