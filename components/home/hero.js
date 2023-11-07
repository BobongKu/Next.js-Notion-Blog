
import Link from 'next/link';
import Animation from './../animation';
import lottieJson from '../../public/bear.json'


export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 보봉규입니다!
            <br className="hidden lg:inline-block"/>그냥 살아있는데요.. 잘 모르겠습니다..
            </h1>
            <p className="mb-8 leading-relaxed">
                대통령은 제4항과 제5항의 규정에 의하여 확정된 법률을 지체없이 공포하여야 한다. 제5항에 의하여 법률이 확정된 후 또는 제4항에 의한 확정법률이 정부에 이송된 후 5일 이내에 대통령이 공포하지 아니할 때에는 국회의장이 이를 공포한다.
            </p>
            <div className="flex justify-center">
                <Link href="/projects">
                   <div className="relative inline-flex  group">
                        <div
                            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <button
                            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white dark:text-black transition-all duration-200 bg-gray-700 dark:bg-gray-200 font-pj rounded-xl focus:outline-none"
                            role="button">Projects
                        </button>
                    </div>
                </Link>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation lottieJson={lottieJson}/>
            </div>
        </>
    )
}