import OrderHeader from './OrderHeader';
import OrderDelivery from './OrderDelivery';
import OrderItemsList from './OrderItemsList';
import { useLoaderData } from 'react-router-dom';
import OrderSummary from './OrderSummary';

export function Order() {
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  return (
    <div className="space-y-8">
      <OrderHeader id={id} status={status} priority={priority} />

      <OrderDelivery estimatedDelivery={estimatedDelivery} />

      <OrderItemsList cart={cart} />

      <OrderSummary
        priority={priority}
        priorityPrice={priorityPrice}
        orderPrice={orderPrice}
      />
    </div>
  );
}

export default Order;
