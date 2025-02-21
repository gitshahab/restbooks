import { useSearchParams } from 'react-router-dom'
import { useFetch, LoadingNerror, ProductCard, useTitle } from '../../../components/index';
import { useEffect, useState } from 'react';

export const Search = () => {
    const [ searchParams ] = useSearchParams(); 
    const query = searchParams.get("q") || "fiction";
    const [ processedQuery, setProcessedQuery ] = useState(query.toLowerCase().replace(/\s+/g, ''));

    const { data, error, loading } = useFetch(`${process.env.REACT_APP_API}?q=${processedQuery}&orderBy=relevance&maxResults=12`);
    useTitle(`${query}`);

    useEffect(() => {
        setProcessedQuery(query.toLowerCase().replace(/\s+/g, ''));
    }, [query]);

  return (
    <main>
        <section className='my-5'>
            <LoadingNerror error={error} loading={loading}/>
            <h1 className='text-2xl text-center font-semibold dark:text-gray-100 mb-5 underline underline-offset-8'>{query !== "fiction" ? `Result's for '${query}'` : "Default Result's"}</h1>
            <div className='flex flex-wrap lg:flex-row justify-center gap-2'>
                {data && data.map((book, index) => (
                    <ProductCard key={index} bookId={book?.id} data={book?.volumeInfo} price={book?.saleInfo} fullData={book}/>
                ))}
            </div>
        </section>
    </main>
  )
}
