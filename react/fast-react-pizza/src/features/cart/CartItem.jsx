import { formatCurrency } from '../../utils/helpers';
import UpdateItem from './UpdateItem';

function CartItem({ item }) {
  const { id, name, quantity, unitPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm, font-bold">
          {formatCurrency(unitPrice * quantity)}
        </p>
        <UpdateItem id={id}>{quantity}</UpdateItem>
      </div>
    </li>
  );
}

export default CartItem;
