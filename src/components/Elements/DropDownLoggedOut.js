import { Link } from 'react-router-dom';

export const DropDownLoggedOut = ({setDropdown}) => {
  return (
    <div id="dropdown" className="select-none absolute top-12 right-0.5 z-10 bg-white bg-opacity-75 divide-y divide-gray-100 rounded-lg shadow w-18 md:w-44 dark:bg-gray-700 dark:bg-opacity-75">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
                <Link onClick={() => setDropdown(false)} to="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link onClick={() => setDropdown(false)} to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign In</Link>
            </li>
            <li>
                <Link onClick={() => setDropdown(false)} to="/register" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
            </li>
        </ul>
    </div>
  )
}
