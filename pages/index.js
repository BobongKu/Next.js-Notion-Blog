import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/home/hero'
import { PROJECT_DATABASE,POST_DATABASE,KEY } from '../config/index'

import ProjectItem from '../components/projects/project-item'

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: KEY });

export default function Home({projects, posts}) {

  return (
    <Layout>

      <Head>
        <title>Bobong</title>
        <meta name="description" content="Bobong's Portfolio" />
      </Head>

      <section className="flex min-h-screen flex-col items-center text-gray-600 body-font">
            <div className="flex px-5 py-10 md:flex-row flex-col items-center">
              <Hero/>
            </div>
            <div className='mx-auto flex flex-col items-center border-t-2 border-gray-400 sm:mx-3 py-10'>
              <div className='bg-gradient-to-r from-indigo-500 via-violet-600 to-blue-500 dark:bg-gradient-to-r dark:from-blue-200 dark:to-cyan-200 bg-clip-text text-transparent'>
                <span className='text-3xl font-bold items-center font-mono'>Recent Projects</span>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-3 py-5 m-6 gap-x-12 gap-y-16">
                {projects.results.map((project, index) => (
                  <ProjectItem key={index} data={project} dir="project"/>
                ))}
              </div>
            </div>
            <div className='mx-auto flex flex-col items-center border-t-2 border-gray-400 sm:mx-3 py-10'>
              <div className='bg-gradient-to-r from-indigo-500 via-violet-600 to-blue-500 dark:bg-gradient-to-r dark:from-blue-200 dark:to-cyan-200 bg-clip-text text-transparent'>
                <span className='text-3xl font-bold items-center font-mono'>Recent Posts</span>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-3 py-5 m-6 gap-x-12 gap-y-16">
                {posts.results.map((post, index) => (
                  <ProjectItem key={index} data={post} dir="post"/>
                ))}
              </div>
            </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {

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
      revalidate: 10,
  }
}