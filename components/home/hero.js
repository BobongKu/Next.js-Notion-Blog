
import Animation from './../animation';
import lottieJson from '../../public/bear.json'


export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center xl:w-2/2 text-gray-900">
            Bobong Blog
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            I'm posting mainly<br/>web hacking<br/>and<br/>reverse engineering
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="https://github.com/r1/nine4-2/"
            >
              <span className="justify-center">Find out more</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <Animation
            className="w-80 md:ml-1 ml-24"
            lottieJson={lottieJson}
          ></Animation>
        </div>
      </div>
    )
}