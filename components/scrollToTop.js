import { useState, useEffect } from "react"
import Animation from "./animation";
import lottieJson from "../public/scrollToTop.json"

export default function ScrollToTop(){
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return showButton &&(
        <div className="fixed z-30 right-10 bottom-8">
            <button className="w-12 bg-gray-600 bg-opacity-20 border-2 border-opacity-10 border-white rounded-full 
                            hover:border-gray-600 hover:border-opacity-60 hover:bg-opacity-60 dark:hover:border-white dark:hover:border-opacity-60 dark:hover:bg-opacity-60 dark:bg-white dark:bg-opacity-40" onClick={scrollToTop} type="button" >
                <Animation lottieJson={lottieJson}/>
            </button>
        </div>
    )
}