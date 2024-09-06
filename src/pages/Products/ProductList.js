import { LoadingNerror, ProductCard, useFetch, useTitle } from "../../components/index";
import { FilterBar } from "./components/FilterBar";
import { useEffect, useState } from "react";
import { useFilter } from "../../context";

export const ProductList = () => {
    const { products, initialProductList} = useFilter();
    const [ active, setActive ] = useState(null);

    const [ path, setPath ] = useState("PopularReads");
    const [ show, setShow ] = useState(false);
    
    const { data, loading, error } = useFetch(`https://www.googleapis.com/books/v1/volumes?q=${path}&orderBy=relevance&maxResults=40`);
    
    useTitle("Explore eBooks");

    useEffect(() => {
        if (data) {
            initialProductList(data);
        }
    }, [data, initialProductList]);

    const limitedProducts = products.slice(0, 32);

    const handleActive = (category) => {
        setActive(category);
    }
    
  return (
    <main>
        <section className="my-5">
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
            <div className="flex justify-center my-7 gap-2 md:gap-4 text-black dark:text-slate-100">
                <span onClick={() => {setPath("fiction"); handleActive("fiction");} } className={`${active === "fiction" ? `bg-black text-white dark:bg-white dark:text-black`: "" } hover:cursor-pointer px-2 py-4 rounded-full border border-gray-500 dark:border-grey-100 text-base font-semibold md:w-24 text-center`}>Fiction</span>
                <span onClick={() => {setPath("mystery"); handleActive("mystery");} } className={`${active === "mystery" ? `bg-black text-white dark:bg-white dark:text-black`: "" } hover:cursor-pointer px-2 py-4 rounded-full border border-gray-500 dark:border-grey-100 text-base font-semibold  md:w-24 text-center`}>Mystery</span>
                <span onClick={() => {setPath("fantasy"); handleActive("fantasy");} } className={`${active === "fantasy" ? `bg-black text-white dark:bg-white dark:text-black`: "" } hover:cursor-pointer px-2 py-4 rounded-full border border-gray-500 dark:border-grey-100 text-base font-semibold  md:w-24 text-center`}>Fantasy</span>
                <span onClick={() => {setPath("education"); handleActive("education");} } className={`${active === "education" ? `bg-black text-white dark:bg-white dark:text-black`: "" } hover:cursor-pointer px-2 py-4 rounded-full border border-gray-500 dark:border-grey-100 text-base font-semibold  md:w-24 text-center`}>Education</span>
            </div>
        </section>
        <LoadingNerror loading={loading} error={error} />
        {!loading && !error && (<section>
            <div className="flex flex-wrap justify-center gap-2 lg:flex-row">
                {limitedProducts && limitedProducts.map((book, index) => (
                <ProductCard key={index} data={book.volumeInfo} price={book.saleInfo} fullData={book} />
                ))}
            </div>
        </section>)}
        {show && (<FilterBar show={show} setShow={setShow}/>)}
    </main>
  )
}
