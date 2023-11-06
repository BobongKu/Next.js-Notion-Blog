import Markdown from "react-markdown";


export default function PostInfo({data}) {
    return (
        <section className="container px-5 py-24 mx-auto">
                  <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                    <div className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert rounded-2xl bg-gray-100 px-7 py-10 dark:bg-slate-600">
                      <Markdown className="prose lg:prose-xl dark:prose-invert">
                      {data}
                      </Markdown>
                    </div>
                  </div>
        </section>
    )
}