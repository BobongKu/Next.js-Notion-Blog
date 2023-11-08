import Link from "next/link";

export default function Footer() {
    return(
        <>
            <footer className="body-font">
                <div>
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="ml-3 text-xl">보봉규 포트폴리오</span>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 Bobong</p>
                    </div>
                </div>
            </footer>
        </>
    )
}