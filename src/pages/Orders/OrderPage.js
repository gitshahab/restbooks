import { useLocation } from 'react-router-dom';
import { OrderSuccess } from './components/OrderSuccess';
import { OrderFails } from './components/OrderFails';
import { useTitle } from '../../components';

export const OrderPage = () => {
    const { state } = useLocation();
    useTitle("order-restbooks");
  return (
    <main>
        { state.status ? <OrderSuccess data={state.data} /> : <OrderFails /> }
    </main>
  )
}
