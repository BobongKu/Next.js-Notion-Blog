import Layout from "../components/layout";
import Head  from 'next/head';
import lottieJson from '../public/Animation - 1699258065950.json'
import Animation from "../components/animation";

export default function PageNotFound(){
    return(
        <Layout>
            <Head>
                <title>Bobong</title>
                <meta name="description" content="Bobong's Portfolio" />
            </Head>

            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Animation className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" lottieJson={lottieJson}/>
                    <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">페이지를 찾을 수 없습니다</h1>
                    </div>
                </div>
            </section>
        </Layout>
    )
}