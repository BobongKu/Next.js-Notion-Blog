import Link from "next/link"
import DarkModeToggleButton from "./dark-mode-toggle-button"

export default function Header() {
    return(
        <>
            <header className="blur-header">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <span className="ml-3 text-xl">보봉규 포트폴리오</span>
                        </a>
                    </Link>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">홈</a>
                        </Link>

                        <Link href="/projects">
                            <a className="mr-5 hover:text-gray-900">프로젝트</a>
                        </Link>

                        <a href="mailto:jhbgjy7@gmail.com" className="mr-5 hover:text-gray-900">연락하기</a>

                        <a className="mr-5 hover:text-gray-900">방명록</a>
                    </nav>
                    <DarkModeToggleButton/>
                </div>
            </header>
        </>
    )
}