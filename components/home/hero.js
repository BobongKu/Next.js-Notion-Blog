import Image from "next/image"
import HeroImg from "../../public/hero.jpg"

export default function Hero() {
    return (
      <div className="container px-6 py-16 mx-auto text-center bg-hero">
          <div className="max-w-lg mx-auto">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Bobong&apos;s Information Security Blog</h1>
              <p className="mt-6 text-gray-500 dark:text-gray-300">Studying Web Hacking and Reverse Engineering.</p>
          </div>

          <div className="flex justify-center mt-10">
              <Image className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                alt="hi"
                width="450"
                height="550"
                src={HeroImg}
                objectFit="cover"
              />
          </div>
      </div>
    )
}