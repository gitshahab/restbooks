import { useLocation } from 'react-router-dom';
import { OrderSuccess } from './components/OrderSuccess';
import { OrderFails } from './components/OrderFails';

export const OrderPage = () => {
    const { state } = useLocation();
  return (
    <main>
        { state.status ? <OrderSuccess data={state.data} /> : <OrderFails /> }
    </main>
  )
}
