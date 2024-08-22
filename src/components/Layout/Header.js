import { Link } from "react-router-dom";
import Logo from "../../assets/restbooksLogo.png";


export const Header = () => {
  return (
    <header>
        <nav className="bg-white border-gray-200 dark:bg-dark-bg text-black dark:text-dark-text">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-8" alt="restbooks Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">restbooks</span>
                </Link>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <span className="bi bi-brightness-high-fill cursor-pointer text-xl text-grey-700 dark:text-white mr-15"></span>
                    <span className="bi bi-search cursor-pointer text-xl text-grey-700 dark:text-white mr-5"></span>
                    <Link to="/" className="text-grey-700 dark:text-white mr-5">
                        <span className="bi bi-cart-fill cursor-pointer relative">
                            <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">0</span>
                        </span>
                    </Link>
                    
                    <span className="bi bi-person-circle cursor-pointer text-xl text-grey-700 dark:text-white mr-5"></span>
                </div>
            </div>
        </nav>
    </header>
  )
}
