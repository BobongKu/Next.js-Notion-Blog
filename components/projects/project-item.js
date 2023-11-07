import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({data}) {

    const title = data.properties.이름.title[0].plain_text
    // 값이 없을때 처리 방법
    const description = data.properties.Description.rich_text[0]?.plain_text ?? '';
    const cover = data.cover.external?.url || data.cover.file.url
    const postId = data.id


    return (
        <>
            <div class="group relative m-1 flex h-72 w-96 flex-col rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <Link href={`/post/${postId}`}>
            <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <Image
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        src={cover}
                        alt="cover image"
                        width="100"
                        height="100"
                        layout="responsive"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
            </Link>
            <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <h1 class="font-serif text-xl font-bold text-white shadow-2xl bg-black bg-opacity-30 rounded-md ps-1 pr-1">{title}</h1>
                <h1 class="text-sm font-light text-gray-200 shadow-xl">{description}</h1>
            </div>
            </div>
        </>
    )

}