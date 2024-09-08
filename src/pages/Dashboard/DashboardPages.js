import { useEffect, useState } from 'react';
import { DashboardCard } from './components/DashboardCard';
import { DashboradEmpty } from './components/DashboradEmpty';
import { getUserOrders, logout } from '../../services';
import { useTitle } from '../../components';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const DashboardPages = () => {
    const navigate = useNavigate();
    const [ orders, setOrders ] = useState([]);
    useTitle("Dashboard");
    
    useEffect(() => {
        async function fetchOrder(){
            const resp = await getUserOrders();
            if (resp.status === 401) {
                toast.error("It's too long, please do a fresh login");
                logout();
                toast.success("Signed out successfully!");
                navigate("/login");
            } else if (resp.status){
                toast.error(`Error : ${resp.status}`)
            } else if (Array.isArray(resp.data)){
                setOrders(resp.data);
            } else {
                setOrders([]);
            } 
        }
        fetchOrder();
    }, [navigate]);

  return (
    <main>
        <section>
            <p className='text-2xl text-center font-semibold dark:text-gray-100 mb-5 underline underline-offset-8'>My Dashboard</p>
        </section>
        <section>
        {orders.length > 0 ? (
                    orders.map((order) => <DashboardCard key={order.id} order={order} />)
                ) : (
                    <DashboradEmpty />
                )}
        </section>
    </main>
  )
}
