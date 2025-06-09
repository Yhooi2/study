import LinkButton from '../../ui/LinkButton';

function CartEmpty() {
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">
        {' '}
        Your cart is still empty. Start adding some pizzas 🍕
      </h2>
    </div>
  );
}

export default CartEmpty;
