import DarkModeToggleButton from "./dark-mode-toggle-button";
import Link from 'next/link';

export default function Header() {
    return (
        <nav className="blur-header">
            <div className="container m-auto px-2 md:px-12 lg:px-20">
                <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-3 md:gap-0 relative">
                    <input type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer"/>
                    <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                        <Link href='/'>
                            <a aria-label="logo" className="flex space-x-2 items-center">
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="32" height="32" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="currentColor" stroke="none">
                                <path d="M2270 5041 c-137 -15 -159 -21 -196 -56 -31 -30 -49 -36 -143 -54
                                -276 -53 -578 -181 -821 -348 -502 -346 -879 -883 -1019 -1453 -53 -216 -65
                                -329 -66 -595 0 -250 7 -327 50 -540 117 -584 430 -1137 801 -1415 180 -136
                                429 -279 606 -349 275 -109 799 -171 1328 -158 270 7 398 18 570 48 622 108
                                1096 442 1374 970 291 552 422 1457 301 2086 -106 555 -456 1080 -930 1395
                                -331 219 -830 392 -1309 454 -142 18 -439 26 -546 15z m560 -371 c310 -45 663
                                -154 915 -283 498 -256 838 -697 959 -1247 78 -353 52 -900 -64 -1360 -188
                                -746 -583 -1155 -1260 -1304 -154 -34 -279 -45 -565 -53 -459 -11 -870 29
                                -1145 113 -153 47 -454 216 -616 346 -260 209 -506 642 -613 1079 -55 223 -65
                                311 -65 569 0 250 9 334 59 531 68 267 202 536 384 774 65 86 263 287 351 358
                                155 125 377 253 547 316 177 65 421 111 593 111 80 0 124 15 160 55 25 27 25
                                27 125 20 55 -3 161 -15 235 -25z"/>
                                <path d="M1742 3224 c-198 -96 -174 -384 37 -459 58 -20 100 -19 164 5 97 37
                                159 126 159 231 0 188 -190 305 -360 223z"/>
                                <path d="M3245 3226 c-204 -95 -184 -385 32 -462 113 -40 244 17 297 130 100
                                211 -117 431 -329 332z"/>
                                <path d="M4055 2554 c-71 -37 -93 -81 -105 -207 -24 -245 -137 -475 -330 -667
                                -189 -187 -401 -298 -695 -360 -126 -27 -396 -37 -543 -21 -234 25 -487 97
                                -633 179 -260 147 -428 438 -449 777 -9 152 -25 187 -107 229 -85 43 -202 -6
                                -237 -99 -25 -66 6 -349 55 -497 137 -419 412 -691 842 -833 465 -153 987
                                -155 1412 -5 456 162 824 527 970 963 61 182 86 399 53 462 -43 81 -155 120
                                -233 79z"/>
                                </g>
                                </svg>
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">Bobong</span>
                            </a>
                        </Link>
                        <div className="flex items-center lg:hidden max-h-10">
                            <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative  p-6 -mr-6">
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
                                <Link href="/">
                                    <a className="mr-5 flex items-center text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                                        <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
                                        </svg>
                                        <span>Home</span>
                                    </a>
                                </Link>
                                </li>
                                <li>
                                <Link href="/projects">
                                    <a className="mr-5 flex items-center text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                                        <path fillRule="evenodd" d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z" clipRule="evenodd" />
                                        </svg>
                                        <span>Projects</span>
                                    </a>
                                </Link>
                                </li>
                                <li>
                                <Link href="/posts">
                                    <a className="mr-5 flex items-center text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                                        <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
                                        </svg>
                                        <span>Posts</span>
                                    </a>
                                </Link>
                                </li>
                                <li>
                                <a href="mailto:jhbgjy7@gmail.com" className="mr-5 flex items-center text-gray-600">
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