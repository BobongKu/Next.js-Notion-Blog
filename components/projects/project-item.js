import Link from "next/link";
import PostImage from "./projectImg";
import { ToastContainer, toast } from 'react-toastify';
import React from "react";


export default function ProjectItem({data,dir}) {

    //https://fkhadra.github.io/react-toastify/introduction
    const notify = () => toast.error("This post is not public.");


    const title = data.properties.이름.title[0].plain_text
    // 값이 없을때 처리 방법
    const description = data.properties.Description.rich_text[0]?.plain_text ?? '';
    const cover = data.cover.external?.url || data.cover.file.url
    const tags = data.properties.태그.multi_select
    const postId = data.id
    const public_url = data.public_url

    if(public_url===null){
        return (
            <>
                <div className="group relative mx-auto gap-x-1 flex h-64 w-80 xl:h-72 xl:w-96 flex-col rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
                    onClick={notify}>
                        <PostImage cover={cover}/>
                    </div>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable={false}
                        pauseOnHover={false}
                        theme="colored"
                    />
                <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <div className="flex">
                        <h1 className="md:text-xl text-md font-bold text-white bg-black bg-opacity-30 rounded-md ps-1 pr-1">{title}</h1>
                    </div>
                        <div className="flex items-start mt-1">
                            {tags.map((tag) => (
                                <Link href={`/${dir}?search=${tag.name}`} key={tag.id}>
                                    <a className="px-1 mr-2 text-white bg-black bg-opacity-30 rounded-md text-xs md:text-sm hover:text-blue-400 dark:hover:text-blue-400 hover:bg-opacity-70 hover:font-bold">{tag.name}</a>
                                </Link>
                            ))}
                        </div>
                        <div className="flex">
                            <h1 className="px-1 text-sm text-red-500 dark:text-red-500 font-bold mt-1 bg-black bg-opacity-30 rounded-md">공개되지 않은 글입니다.</h1>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="group relative mx-auto gap-x-1 flex h-64 w-80 xl:h-72 xl:w-96 flex-col rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                <Link href={`/post/${postId}`}>
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                        <PostImage cover={cover}/>
                    </div>
                </Link>
            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <div className="flex">
                    <h1 className="md:text-xl text-md font-bold text-white bg-black bg-opacity-30 rounded-md ps-1 pr-1">{title}</h1>
                </div>
                    <div className="flex items-start mt-1">
                        {tags.map((tag) => (
                            <Link href={`/${dir}?search=${tag.name}`} key={tag.id}>
                                <a className="px-1 mr-2 text-white bg-black bg-opacity-30 rounded-md text-xs md:text-sm hover:text-blue-400 dark:hover:text-blue-400 hover:bg-opacity-70 hover:font-bold" >{tag.name}</a>
                            </Link>
                        ))}
                    </div>
                    <div className="flex">
                        <h1 className="px-1 text-sm font-light text-gray-200 dark:text-gray-200 mt-1 bg-black bg-opacity-30 rounded-md">{description}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}