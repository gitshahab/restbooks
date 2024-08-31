import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/restbooksLogo.png";
import { useEffect, useState } from "react";
import { SearchForm } from "../Elements/SearchForm";
import { DropDownLoggedOut, DropDownLoggedIn } from "../index";
import { useCart } from "../../context";

export const Header = () => {
    const { cartList } = useCart();
    const [ dark, setDark ] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
    const [ searchBar, setSearchBar ] = useState(false);
    const [ dropdown, setDropdown ] = useState(false);
    const [ active, setActive ] = useState(null);
    const location = useLocation();
    const token = sessionStorage.getItem("token");

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(dark));
        if(dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark])

    const handleActive = (category) => {
        setActive(category);
    }


   return (
    <header>
        <nav className="bg-white border-b-2 border-grey-200 shadow-sm dark:border-grey-700 dark:bg-dark-bg text-black dark:text-dark-text">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-6 lg:h-8" alt="restbooks Logo" />
                    <span className="self-center text-sm lg:text-2xl font-semibold whitespace-nowrap dark:text-white">restbooks</span>
                </Link>
                <div className="flex items-center space-x-3 lg:space-x-6 rtl:space-x-reverse">
                    <Link to="/" onClick={() => handleActive("home")} ><span className={`${active === "home" || location.pathname === "/" ? "text-gray-900 dark:text-white" : ""} bi bi-house-door cursor-pointer text-base lg:text-xl text-gray-400`}></span></Link>
                    <Link to="/products" onClick={() => handleActive("products")}><span className={`${active === "products" || location.pathname === "/products" ? "text-gray-900 dark:text-white" : ""} bi bi-book cursor-pointer text-base lg:text-xl text-gray-400`}></span></Link>
                    <span onClick={() => {setDark(!dark); handleActive("dnMode");}} className={`bi ${ dark ? `bi-moon-fill` : `bi-brightness-high-fill`}  ${active === "dnMode" ? "text-gray-900 dark:text-white" : ""} cursor-pointer text-base lg:text-xl text-gray-400`}></span>
                    <span onClick={() => {setSearchBar(!searchBar); handleActive("search");}} className={`${active === "search" || location.pathname === "/search" ? "text-gray-900 dark:text-white" : ""} bi bi-search cursor-pointer text-base lg:text-xl text-gray-400`}></span>
                    <Link to="/cartpage" onClick={ () =>handleActive("cartpage")} className={`${active === "cartpage" || location.pathname === "/cartpage" ? "text-gray-900 dark:text-white" : ""} text-gray-400`}>
                        <span className="bi bi-cart-fill cursor-pointer text-base lg:text-xl  relative">
                            <span className="text-white text-xs lg:text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">{cartList.length}</span>
                        </span>
                    </Link>
                    
                    <span onClick={() => {setDropdown(!dropdown); handleActive("person");}} className={`${active === "person" && dropdown ? "text-gray-900 dark:text-white" : ""} bi bi-person-circle cursor-pointer text-base lg:text-xl text-gray-400`}></span>
                    {dropdown && (token ? <DropDownLoggedIn setDropdown={setDropdown}/>:<DropDownLoggedOut setDropdown={setDropdown} />)}
                </div>
            </div>
        </nav>
        { searchBar &&  <SearchForm />}
    </header>
  )
}
