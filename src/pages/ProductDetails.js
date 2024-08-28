import { useFetch, LoadingNerror, Ratings, useTitle} from '../components/index';
import { Link, useParams } from "react-router-dom";
import DefaultCover from "../assets/default-cover.webp";

export const ProductDetails = () => {
    const { id } = useParams();
    const { data, error, loading } = useFetch(`https://www.googleapis.com/books/v1/volumes?q=${id}&orderBy=relevance&maxResults=1`);

    const item = data?.[0];
    const volumeInfo = item?.volumeInfo;
    const saleInfo = item?.saleInfo;
    const title = volumeInfo?.title || "No title Available";
    const subtitle = volumeInfo?.description || "No Description Available" ;
    const rating = volumeInfo?.averageRating || 3 ;
    const thumbnail = volumeInfo?.imageLinks?.thumbnail || `${DefaultCover}`;
    const priceAmt = saleInfo?.listPrice?.amount || "Out Of Stock";
    const date = volumeInfo?.publishedDate || "";
    const author = volumeInfo?.authors || "No Author Available"
    const category = volumeInfo?.categories || "";

    useTitle(`${title}`);

  return (
    <main>
        <section className='p-5 md:10 lg:20 bg-gray-100 dark:bg-gray-800 rounded-lg min-h-96'>
            <LoadingNerror loading={loading} error={error} />
            {!loading && !error && (
            <div className='flex flex-col md:flex-row items-start md:items-center gap-1'>
                <div className="flex justify-center w-1/2 md:w1/3 mx-10">
                    <img src={thumbnail} alt={title} className='w-52 h-auto rounded-lg shadow-lg' />
                </div>
                <div className='flex-1 space-y-1 md:space-y-6'>
                    <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100'>{title}</h2>
                    <p className='text-gray-700 dark:text-gray-300'>{date}</p>
                    <p className='text-gray-700 dark:text-gray-300 font-semibold'>by {author}</p>
                    <p className='text-gray-700 dark:text-gray-300'>{category ? `Category: ${category}` : ""}</p>
                    <div>
                        {priceAmt <= 500 || rating >= 4 ? (<span className="px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>) : "" }
                    </div>
                    <div className='flex items-center mt-2.5 mb-5'>
                        <Ratings rating={rating}/>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating.toFixed(1)}</span>
                    </div>
                    <p className='text-gray-700 dark:text-gray-300'>{subtitle}</p>
                    <div className='flex gap-5 items-center'>
                        <span className={`${ priceAmt !== "Out Of Stock"? 'bi bi-currency-rupee text-3xl' : 'bi bi-cart-x text-xl'} my-5 font-bold text-gray-900 dark:text-white`}>{priceAmt}</span>
                        <Link to="#" className="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
                    </div>
                </div>
            </div>)}
        </section> 
    </main>
  )
}
