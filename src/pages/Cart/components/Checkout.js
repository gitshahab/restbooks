import { useEffect, useState } from "react";
import { useCart } from "../../../context";
import { useNavigate } from "react-router-dom";
import { createOrder, getUser } from "../../../services";


export const Checkout = ({setCheckout}) => {
    const { total, cartList, clearCart } = useCart();
    const [ user, setUser ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUser(){
            const data = await getUser();
            setUser(data);
        }
        fetchUser()
    }, []);
    
    async function handleOrder(event){
        event.preventDefault();

        try {
            const data = await createOrder(cartList, total, user);
            clearCart();
            navigate("/order", {state: {data: data, status: true}});
        } catch (error) {
            navigate("/order", {state: {status: false}});
        }
    }

  return (
    <section className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-50">
            <div className="relative top-24 md:top-7 w-80 md:w-96 h-fit p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white"><i className="bi bi-credit-card mr-2"></i>CARD PAYMENT</h3>
                <button type="button" onClick={() => setCheckout(false)} data-drawer-dismiss="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" className="absolute top-2.5 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                <i className="bi bi-x-circle"></i>
                </button>
                <form  onClick={handleOrder} className="space-y-6">
                    <div className="flex items-center">
                        <label htmlFor="name" className="mb-2 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name:</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" readOnly value={user.name || ""} />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="email" className="mb-2 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email:</label>
                        <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" readOnly value={user.email || ""}/>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="card" className="mb-2 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Card Number:</label>
                        <input type="number" name="card" id="card" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" readOnly value="4215625462597845"/>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="code" className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expiry Date:</label>
                        <input type="number" name="month" id="month" className="ml-2 w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" readOnly value="03" />
                        <input type="number" name="year" id="year" className="w-20 ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" readOnly value="27" />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="code" className="mr-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Security Code:</label>
                        <input type="number" name="code" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" readOnly value="523" />
                    </div>
                    <p className="mb-4 text-2xl font-semibold text-lime-500 text-center">{total}</p>
                    <button className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"><i className="mr-2 bi bi-lock-fill"></i>PAY NOW</button>
                </form>
            </div>
    </section>
  )
}
