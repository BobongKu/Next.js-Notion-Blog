import Image from "next/image";

export default function ProjectItem({data}) {

    const title = data.properties.이름.title[0].plain_text
    const githubLink = data.properties.Github.rich_text[0].href
    // 값이 없을때 처리 방법
    const description = data.properties.Description.rich_text[0]?.plain_text ?? ''; 
    const date = data.properties.날짜.date.start
    const cover = data.cover.external.url

    console.log(description)

    return (
        <div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md">
            <Image src={cover} width="100" height="60%"/>
            <h1>{title}</h1>
            <h1>{description}</h1>
            <h1>{date}</h1>
            <a href={githubLink}>깃허브 바로가기</a>
        </div>
    )

}