import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getSession, logout } from '../../services';

export const DropDownLoggedIn = ({setDropdown}) => {
    const navigate = useNavigate();
    const sessionData = getSession();

    const handleSignOut = () => {
        logout();
        toast.success("Signed out successfully!");
        navigate("/");
        setDropdown(false);
    }

  return ( 
    <div id="dropdown" className="select-none absolute top-12 right-0.5 z-10 bg-white bg-opacity-75 divide-y divide-gray-100 rounded-lg shadow w-18 md:w-44 dark:bg-gray-700 dark:bg-opacity-75">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
            <Link onClick={() => setDropdown(false)} to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{sessionData.email}</Link>
        </li>
        <li>
            <Link onClick={() => setDropdown(false)} to="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
        </li>
        <li>
            <Link onClick={() => setDropdown(false)} to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
        </li>
        <li>
            <span onClick={handleSignOut} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</span>
        </li>
        </ul>
    </div>
  )
}
