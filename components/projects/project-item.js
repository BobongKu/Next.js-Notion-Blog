import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectItem({data,dir}) {

    const title = data.properties.이름.title[0].plain_text
    // 값이 없을때 처리 방법
    const description = data.properties.Description.rich_text[0]?.plain_text ?? '';
    const cover = data.cover.external?.url || data.cover.file.url
    const tags = data.properties.태그.multi_select
    const postId = data.id
    
    const [isLoading, setLoading] = useState(true);

    return (
        <>
            <div className="group relative mx-auto gap-x-1 flex h-64 w-80 xl:h-72 xl:w-96 flex-col rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <Link href={`/${dir}/${postId}`}>
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <Image
                        className={`animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110
                        ${
                            isLoading
                                ? "scale-110 blur-2xl grayscale"
                                : "scale-100 blur-0 grayscale-0"
                        }`}
                        onLoadingComplete={() => setLoading(false)}
                        src={cover}
                        alt="cover image"
                        width="100"
                        height="100"
                        layout="responsive"
                        objectFit="cover"
                        quality={50}
                        placeholder="blur" // 추가
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                    />
                </div>
            </Link>
            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <div className="flex">
                    <h1 className="md:text-xl text-md font-bold text-white bg-black bg-opacity-30 rounded-md ps-1 pr-1">{title}</h1>
                </div>
                <div className="flex items-start mt-1">
                        {tags.map((tag) => (
                            <h1 className="px-1 mr-2 text-white bg-black bg-opacity-30 rounded-md text-xs md:text-sm" key={tag.id}>{tag.name}</h1>
                        ))}
                </div>
                <div className="flex">
                    <h1 className="px-1 text-sm font-light text-gray-200 mt-1 bg-black bg-opacity-30 rounded-md">{description}</h1>
                </div>
            </div>
            </div>
        </>
    )

}