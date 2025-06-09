import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import Button from './../../ui/Button';
import { addItem, getQuantityById } from '../cart/cartSlice';
import UpdateItem from '../cart/UpdateItem';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const quantity = useSelector(getQuantityById(id));
  const isInCart = quantity > 0;

  if (!pizza) return null;

  const handleAddCart = () => {
    const newItem = {
      id,
      name,
      unitPrice,
      quantity: 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-sm ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5 text-sm">
        <p className="text-base font-medium">{name}</p>
        <p className="capitalize italic">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase text-stone-500">Sold out</p>
          )}
          {isInCart ? <UpdateItem id={id}>{quantity}</UpdateItem> : null}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddCart} type="small">
              Add to card
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
