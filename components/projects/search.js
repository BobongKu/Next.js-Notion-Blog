import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

export default function Search({ dir }) {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;

    // Check if the search term has at least 2 characters
    if (searchTerm.length >= 2) {
      router.push(`/${dir}?search=${encodeURIComponent(searchTerm)}`);
    } else {
      // You can handle cases where the search term is too short (e.g., show a message)
      toast.warn('Min. 2 characters required.');
    }
  };

  return (
    <form className="max-w-md mx-auto p-4 md:py-4 pt-6" onSubmit={handleSearch}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <input
          type="input"
          id="default-search"
          name="search"
          className="block w-full p-2 text-sm text-gray-900 rounded-lg bg-gray-300 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white bg-clip-text{"
          placeholder="Search"
          style={{ appearance: 'textfield' }}
        />
        <button type="submit" className="text-black absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm dark:text-white">
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
        <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="colored"
        />
      </div>
    </form>
  );
}
