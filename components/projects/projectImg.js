import Image from "next/image"
import { useState } from "react";

export default function PostImage({cover}) {
    const [isLoading, setLoading] = useState(true);
    return(
        <Image
                  className={`animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110
                        ${
                          isLoading
                            ? "scale-110 blur-2xl grayscale"
                            : "scale-100 blur-0 grayscale-0"
                        }`}
                  onLoadingComplete={() => setLoading(false)}
                  src={cover}
                  alt="cover image"
                  width="100"
                  height="100"
                  layout="responsive"
                  objectFit="cover"
                  quality={50}
                  placeholder="blur" // 추가
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
    )
}