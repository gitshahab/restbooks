import { Link } from "react-router-dom";

export const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <footer className="bg-wihte shadow dark:bg-dark-bg text-black dark:text-dark-text">
        <div className="px-4 py-6 dark:bg-dark-bg text-black dark:text-dark-text md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© {date} <Link to="/">restbooks</Link>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a href="https://x.com/Shahab_786_?t=-be8RGrxQ_sC8NHyakJE-Q&s=03" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <span className="bi bi-twitter-x"></span>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="https://www.instagram.com/ig_shahab_9?utm_source=qr&igsh=MWM0cW1mNmppa2Vpbw==" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <span className="bi bi-instagram"></span>
                  <span className="sr-only">Instagram page</span>
              </a>
              <a href="https://www.linkedin.com/in/mohd-shahab-249281208" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <span className="bi bi-linkedin"></span>
                  <span className="sr-only">Linkedin page</span>
              </a>   
              <a href="https://github.com/gitshahab" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <span className="bi bi-github"></span>
                  <span className="sr-only">Github page</span>
              </a>
        </div>
        </div>
    </footer>
  )
}
