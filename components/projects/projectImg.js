import Image from "next/image"
import { useState } from "react";

export default function PostImage({cover}) {
    return(
        <Image
          className={`rounded-xl animate-fade-in block h-full w-full dark:border-gray-700 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110`}
          src={cover}
          alt="cover image"
          fill
          quality={50}
          placeholder="blur" // 추가
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
    )
}