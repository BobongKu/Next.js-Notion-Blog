import Layout from "../components/layout";
import Head  from 'next/head';
import { NOTION_DATABASE_ID,NOTION_API_KEY } from '../config/index'
import ProjectItem from "../components/projects/project-item";

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: NOTION_API_KEY });

export default function Projects({projects}) {

    return(
        <Layout>
            <Head>
                <title>Bobong</title>
                <meta name="description" content="Bobong's Portfolio" />
            </Head>
            <h1>총 프로젝트 : {projects.results.length}</h1>

            {projects.results.map(project => <ProjectItem data={project}/> )}
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