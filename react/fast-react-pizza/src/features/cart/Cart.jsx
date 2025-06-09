import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import CartEmpty from './CartEmpty';
import { clearCart } from './cartSlice';

function Cart() {
  const cart = useSelector((store) => store.cart.cart);
  const username = useSelector((store) => store.user.username);

  const dispatch = useDispatch();

  if (cart.length === 0) return <CartEmpty />;

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="my-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new">Order pizzas</Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
