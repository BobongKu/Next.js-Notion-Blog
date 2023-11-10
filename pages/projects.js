import Layout from "../components/layout";
import Head  from 'next/head';
import { PROJECT_DATABASE,KEY } from '../config/index'
import ProjectItem from "../components/projects/project-item";
import Search from "../components/projects/search";

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: KEY });

export default function Projects({projects}) {

    return(
        <Layout>
          <div className="flex flex-col items-center min-h-screen px-5 py-10 mb-10">
            <Head>
                <title>Bobong</title>
                <meta name="description" content="Bobong's Portfolio" />
            </Head>
            <div className="md:grid xl:grid-cols-5 md:grid-cols-3 sm:flex-col sm:flex">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-600 xl:col-start-3 md:col-start-2 text-center">
                Projects
              </h1>
              <div className="xl:col-start-5 md:col-start-3 md:row-start-1 items-center">
                <Search/>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 py-10 m-6 gap-x-12 gap-y-16 border-t-2 border-gray-500">
              {projects.results.map((project, index) => (
                <ProjectItem key={index} data={project} dir="project"/>
              ))}
            </div>
          </div>
        </Layout>
    )
}

export async function getStaticProps() {

    const databaseId = PROJECT_DATABASE;
    const projects = await notion.databases.query({
      database_id: databaseId,
    });


    return {
        props: {projects},
        revalidate: 10,
    }
}