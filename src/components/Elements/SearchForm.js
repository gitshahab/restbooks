import { useNavigate } from 'react-router-dom'

export const SearchForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get("search")?.trim();

        if (query && query.length > 0) {
            navigate(`/search?q=${query}`);
        }
    };

  return (
    <section>
        <form onSubmit={handleSubmit} className="flex items-center max-w-full mx-5 my-2">   
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <span className="bi-search"></span>
                    </div>
                    <input type="text" id="simple-search" name='search' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search fiction, thrillers..." required />
                </div>
                <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
    </section>
  )
}
