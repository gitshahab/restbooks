import { Link } from "react-router-dom";
import DefaultCover from "../../assets/default-cover.webp";
import { Ratings } from "./Ratings";
import { useCart } from "../../context";
import { useEffect, useState } from "react";

export const ProductCard = ({data, price, fullData}) => {
    const title = data?.title || "No title Available";
    const subtitle = data?.description ? data?.description.substring(0, data?.description.indexOf('.') + 1) : "No Description Available" ;
    const rating = data?.averageRating || 3;
    const thumbnail = data?.imageLinks?.thumbnail || `${DefaultCover}`;
    const priceAmt = price?.listPrice?.amount || "Out Of Stock";
    const author = data?.authors || "No Author Available";

    const { cartList, addToCart, removeCart } = useCart();
    const [ incart, setIncart ] = useState(false);

    useEffect(() => {
        const productIncart = cartList.find( item => item.id === fullData.id );
        setIncart(!!productIncart);
    }, [cartList, fullData])


  return (
    <div className="w-72 max-w-sm bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-300">
        <Link to={`/products/product/${title}`} className="relative">
            <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">{priceAmt <= 500 || rating >= 4 ? "Best Seller" : "" }</span>
            <img className="p-8 rounded-t-lg" src={thumbnail} alt={title} />
        </Link>
        <div className="px-5 pb-5">
            <Link to={`/products/product/${title}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="text-gray-900 dark:text-white">{data?.publishedDate}</p>
                <p className="font-medium text-gray-900 dark:text-white">by {author}</p>
                <p className="my-3 bg-primary-bg font-light rounded dark:text-white">{data?.categories ? `Category: ${data?.categories}`: "" }</p>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
                {<Ratings rating={rating}/>}
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating.toFixed(1)}</span>
            </div>
            <div>
                <p className="text-gray-900 dark:text-white">{subtitle}</p>
            </div>
            <div className="flex items-center justify-between">
                <span className={`${ priceAmt !== "Out Of Stock"? 'bi bi-currency-rupee text-3xl' : 'bi bi-cart-x text-xl'} my-2  font-bold text-gray-900 dark:text-white`}>{priceAmt}</span>
                {!incart && <span onClick={() => addToCart(fullData)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer">Add to cart</span>}
                {incart && <span onClick={() => removeCart(fullData)} className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hover:cursor-pointer">Remove</span>}
            </div>
        </div>
    </div>
  )
}
