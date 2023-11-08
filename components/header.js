import DarkModeToggleButton from "./dark-mode-toggle-button";
import Link from 'next/link';

export default function Header() {
    return (
        <nav className="blur-header">
            <div className="container m-auto px-2 md:px-12 lg:px-7">
                <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-3 md:gap-0 relative">
                    <input type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer"/>
                    <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                        <Link href='/' className="flex space-x-2 items-center">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">Bobong</span>
                        </Link>
                        <div className="flex items-center lg:hidden max-h-10">
                            <label role="button" for="toggle_nav" aria-label="humburger" id="hamburger" className="relative  p-6 -mr-6">
                                <div aria-hidden="true" id="line" className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                            </label>
                        </div>
                    </div>

                    <div className="hidden absolute top-full transition translate-y-1 lg:peer-checked:translate-y-0 lg:translate-y-0 left-0 
                    lg:top-0 lg:relative peer-checked:flex w-full
                    lg:flex lg:flex-row flex-col
                    flex-wrap justify-end items-center
                    gap-5 p-6 rounded-xl
                    bg-gray-300 bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-600 dark:lg:bg-opacity-0 lg:gap-0
                    lg:p-0
                    lg:bg-transparent lg:w-7/12">
                        <div className="lg:pr-4 lg:w-auto w-full lg:pt-0 ">
                            <ul className=" 
                            tracking-wide 
                            font-medium 
                            text-sm flex-col flex 
                            lg:flex-row
                            gap-6 lg:gap-0
                            ">
                                <li>
                                <Link href="/" className="mr-5 flex items-center text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                                        <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
                                        </svg>
                                        <span>Home</span>
                                </Link>
                                </li>
                                <li>
                                <Link href="/projects" className="mr-5 flex items-center text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                                        <path fillRule="evenodd" d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z" clipRule="evenodd" />
                                        </svg>
                                        <span>Projects</span>
                                </Link>
                                </li>
                                <li>
                                <a href="mailto:jhbgjy7@gmail.com" className="mr-5 flex items-center text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                                    </svg>
                                    <span>Contect</span>
                                </a>
                                </li>
                            </ul>
                        </div>
                        <div className="border-t-2 border-dashed border-gray-600 dark:border-white w-full lg:w-max gap-3 pt-2 lg:pt-0 lg:pl-2 lg:border-t-0 lg:border-l-2 flex flex-col lg:gap-0 lg:flex-row items-center">
                        <DarkModeToggleButton/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}