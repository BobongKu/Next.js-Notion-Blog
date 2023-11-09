import Link from "next/link"
import ProjectItem from "../projects/project-item"

export default function IndexItem({data,dir}) {
    return(
        <div className='mx-auto flex flex-col items-center border-t-2 border-gray-400 sm:mx-3 py-10'>
              <div className='bg-gradient-to-r from-indigo-500 via-violet-600 to-blue-500 dark:bg-gradient-to-r dark:from-blue-200 dark:to-cyan-200 bg-clip-text text-transparent'>
                <span className='text-3xl font-bold items-center font-mono'>{`Recent ${dir}s`}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-5 m-6 gap-x-12 gap-y-16">
                {data.results.map((data, index) => (
                  <ProjectItem key={index} data={data} dir={dir}/>
                ))}
              </div>
              <div className="flex justify-content-end hover:font-bold underline underline-offset-4">
                <Link href={`/${dir}s`}>
                  <a className="dark:text-gray-500 dark:hover:text-gray-300">
                    View More
                  </a>
                </Link>
              </div>
        </div>
    )
}