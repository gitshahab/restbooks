import { Link } from "react-router-dom";
import Logo from "../../assets/restbooksLogo.png";
import { useEffect, useState } from "react";
import { SearchForm } from "../Elements/SearchForm";

export const Header = () => {
    const [ dark, setDark ] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
    const [ searchBar, setSearchBar ] = useState(false);
    
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(dark));
        if(dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark])


   return (
    <header>
        <nav className="bg-white border-b-2 border-grey-200 shadow-sm dark:border-grey-700 dark:bg-dark-bg text-black dark:text-dark-text">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-6 lg:h-8" alt="restbooks Logo" />
                    <span className="self-center text-sm lg:text-2xl font-semibold whitespace-nowrap dark:text-white">restbooks</span>
                </Link>
                <div className="flex items-center space-x-3 lg:space-x-6 rtl:space-x-reverse">
                    <Link to="/"><span className="bi bi-house-door cursor-pointer text-base lg:text-xl text-grey-700 dark:text-white"></span></Link>
                    <Link to="/products"><span className="bi bi-book cursor-pointer text-base lg:text-xl text-grey-700 dark:text-white"></span></Link>
                    <span onClick={() => setDark(!dark)} className={`bi ${ dark ? `bi-moon-fill` : `bi-brightness-high-fill`} cursor-pointer text-base lg:text-xl text-grey-700 dark:text-white`}></span>
                    <span onClick={() => setSearchBar(!searchBar)} className="bi bi-search cursor-pointer text-base lg:text-xl text-grey-700 dark:text-white"></span>
                    <Link to="/" className="text-grey-700 dark:text-white">
                        <span className="bi bi-cart-fill cursor-pointer text-base lg:text-xl  relative">
                            <span className="text-white text-xs lg:text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">0</span>
                        </span>
                    </Link>
                    
                    <span className="bi bi-person-circle cursor-pointer text-base lg:text-xl text-grey-700 dark:text-white"></span>
                </div>
            </div>
        </nav>
        { searchBar &&  <SearchForm />}
    </header>
  )
}
