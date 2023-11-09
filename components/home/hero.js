
import Image from "next/image"


export default function Hero() {
    return (
      <div className="container px-6 py-16 mx-auto text-center">
      <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Bobong's Information Security Blog</h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">Studying Web Hacking and Reverse Engineering.</p>
      </div>

      <div className="flex justify-center mt-10">
          <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src='/hero.jpg' />
      </div>
  </div>
    )
}