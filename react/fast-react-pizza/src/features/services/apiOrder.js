import { redirect } from 'react-router-dom';
import { createOrder } from './apiRestaurant';
import { getOrder } from './apiRestaurant';
import store from '../../store';
import { clearCart } from '../cart/cartSlice';

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const cart = JSON.parse(data.cart);
  const order = {
    ...data,
    priority: data.priority === 'true',
    cart: cart.map((item) => ({
      ...item,
      pizzaId: item.id,
      totalPrice: item.unitPrice * item.quantity,
    })),
  };
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';
  }
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export { action, loader };
