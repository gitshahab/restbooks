import { LoadingNerror, ProductCard, useFetch } from "../../components/index";
import { FilterBar } from "./components/FilterBar";
import { useState } from "react";

export const ProductList = () => {
    const [ path, setPath ] = useState("PopularReads");
    const [ show, setShow ] = useState(false);
    
    const { data, loading, error } = useFetch(`https://www.googleapis.com/books/v1/volumes?q=${path}&orderBy=relevance&maxResults=32`);
    
  return (
    <main>
        <LoadingNerror loading={loading} error={error} />
        {!loading && !error && (<section className="my-5">
            <div className="my-5 flex justify-between">
                <span className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Genres..</span>
                <span>
                    <button onClick={ () => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                        </svg>
                    </button>
                </span>
            </div>
            <div className="flex justify-center my-7 gap-2 text-black dark:text-slate-100">
                <span onClick={() => setPath("fiction") } className="hover:bg-gray-200 dark:hover:text-gray-500 hover:cursor-pointer px-2 py-4 rounded-lg bg-dark-primay border border-gray-500 dark:border-grey-100 text-sm font-semibold">Science Fiction</span>
                <span onClick={() => setPath("mystery") } className="hover:bg-gray-200 dark:hover:text-gray-500 hover:cursor-pointer px-2 py-4 rounded-lg bg-dark-primay border border-gray-500 dark:border-grey-100 text-sm font-semibold">Mystery & Thriller</span>
                <span onClick={() => setPath("fantasy") } className="hover:bg-gray-200 dark:hover:text-gray-500 hover:cursor-pointer px-2 py-4 rounded-lg bg-dark-primay border border-gray-500 dark:border-grey-100 text-sm font-semibold">Fantasy</span>
                <span onClick={() => setPath("education") } className="hover:bg-gray-200 dark:hover:text-gray-500 hover:cursor-pointer px-2 py-4 rounded-lg bg-dark-primay border border-gray-500 dark:border-grey-100 text-sm font-semibold">Educational</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 lg:flex-row">
                {data && data.map((book, index) => (
                <ProductCard key={index} bookId={book?.id} data={book.volumeInfo} price={book.saleInfo}/>
                ))}
            </div>
        </section>)}
        {show && (<FilterBar show={show} setShow={setShow}/>)}
    </main>
  )
}
