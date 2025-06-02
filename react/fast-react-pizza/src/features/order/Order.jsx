// Test ID: IIDSAT
//import { action, loader } from './../services/apiOrder';
import { useLoaderData } from 'react-router-dom';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';

const styles = {
  badge: ' rounded-full tracking-wide text-sm font-semibold px-3 py-1 ',

  row: ' flex flex-wrap gap-2 my-2 items-center justify-between',

  summary: ' text-sm bg-stone-200 py-6 px-5 rounded-md',
};



export function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className='space-y-8 '>
      <div className={styles.row}>
        <h2 className='text-xl font-semibold'>Order #{id} status</h2>

        <div className='space-x-2 uppercase'>
          {priority && <span className={`${styles.badge} bg-red-500 text-red-50 `}>Priority</span>}
          <span className={`${styles.badge} bg-green-500 text-green-50`}>{status} order</span>
        </div>
      </div>

      <div className={styles.row + styles.summary}>
        <p className='font-medium text-base'>
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className='text-xs text-stone-500'>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className='divide-y border-y'>
      {cart.map(item => <OrderItem item={item} key={item.id}/>)}
      </ul>

      <div className={styles.summary}>
        <div className={styles.row}>
        <span>Price pizza:</span>
        <span>{formatCurrency(orderPrice)}</span>
        </div>
        {priority && 
        <div className={styles.row}>
        <span>Price priority: </span>
        <span>{formatCurrency(priorityPrice)}</span>
        </div>}
        <div className={styles.row + ' text-base font-bold'}>
          <span>To pay on delivery: </span>
          <span>{formatCurrency(orderPrice + priorityPrice)}</span>
        </div>
      </div>
    </div>
  );
}

export default Order;
