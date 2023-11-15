import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/home/hero'
import { PROJECT_DATABASE,POST_DATABASE,KEY } from '../config/index'
import IndexItem from '../components/home/index-item'


const { Client } = require('@notionhq/client');
const notion = new Client({ auth: KEY });

export default function Home({projects, posts}) {

  return (
    <Layout>
      <Head>
        <title>Bobong</title>
        <meta name="description" content="Bobong's Portfolio" />
        <meta name="google-site-verification" content="3tHDLrRSzGgATP3jmkHIL_mH1WcOWR1X-g8RGQCkS3A" />
      </Head>

      <section className="flex min-h-screen flex-col items-center text-gray-600 body-font">
            <div className="flex px-5 py-10 md:flex-row flex-col items-center justify-center">
              <Hero/>
            </div>

            <IndexItem data={projects} dir="project"/>
            <IndexItem data={posts} dir="post"/>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {

  const projectDatabaseId = PROJECT_DATABASE;
  const projects = await notion.databases.query({
    database_id: projectDatabaseId,
    page_size: 3,
  });
  
  const postDatabaseId = POST_DATABASE;
  const posts = await notion.databases.query({
    database_id: postDatabaseId,
    page_size: 3,
  });


  return {
      props: {projects,posts},
  }
}