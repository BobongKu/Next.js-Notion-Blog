import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({data}) {

    const title = data.properties.이름.title[0].plain_text
    const githubLink = data.properties.Github.rich_text[0].href
    // 값이 없을때 처리 방법
    const description = data.properties.Description.rich_text[0]?.plain_text ?? ''; 
    const startDate = data.properties.날짜.date.start
    const cover = data.cover.external?.url || data.cover.file.url
    const tags = data.properties.태그.multi_select
    const postId = data.id


    return (
        <div className="project-card">
            <Link href={`/post/${postId}`}>
                <Image
                    className="rounded-t-xl"
                    src={cover}
                    alt="cover image"
                    width="100"
                    height="60%"
                    layout="responsive"
                    objectFit="none"
                    quality={100}
                />
            </Link>
            
            <div className="p-4 flex flex-col">
                <Link href={`/post/${postId}`}>
                    <a className="text-2xl font-bold">{title}</a>
                </Link>
                <h1 className="font-bold">{description}</h1>
                <a href={githubLink}>깃허브 바로가기</a>
                <h1 className="my-1"> Created : {startDate}</h1>

                <div className="flex items-start mt-2">
                    {tags.map((tag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 hover:scale-105" key={tag.id}>{tag.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    )

}