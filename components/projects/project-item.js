export default function ProjectItem({data}) {

    const title = data.properties.이름.title[0].plain_text
    const githubLink = data.properties.Github.rich_text[0].href
    const date = data.properties.날짜.date.start
    const cover = data.cover.external.url

    return (
        <div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md">
            <img src={cover} className="flex p-1 m-1"/>
            <h1>{title}</h1>
            <h1>{date}</h1>
            <a href={githubLink}>깃허브 바로가기</a>
        </div>
    )

}