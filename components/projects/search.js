export default function Search() {
    return(
        <form className="max-w-md mx-auto p-4 md:py-4 pt-6">
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative">
                <input
                type="search"
                id="default-search"
                className="block w-full p-2 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white "
                placeholder="Search"
                required
                />
                <button
                type="submit"
                className="text-black absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm dark:text-white"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                    />
                </svg>
                </button>
            </div>
        </form>
    )
}