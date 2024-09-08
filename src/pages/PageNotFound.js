import PageNotFoundImg from "../assets/404-page-not-found.svg";
import { Link } from "react-router-dom";
import { useTitle } from "../components";

export const PageNotFound = () => {
    useTitle("PageNotFound")
  return (
    <main>
        <h1 className='text-2xl text-center font-semibold text-red-500 my-5'>Opps! Page not found.</h1>
        <div className="flex justify-center items-center">
            <img className="text-2xl" src={PageNotFoundImg} alt="404-page" />
        </div>
        <div className="flex justify-center my-10">
            <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Continue Shopping<i className="ml-2 bi bi-cart"></i></Link>
        </div>
    </main>
  )
}
