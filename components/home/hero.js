
import Link from 'next/link';
import Animation from './../animation';
import lottieJson from '../../public/bear.json'


export default function Hero() {
    return (
        <>
            <div className="lg:w-1/5 md:w-1/2 w-5/6">
                <Animation lottieJson={lottieJson}/>
            </div>
        </>
    )
}