import { formatCurrency } from '../../utils/helpers';
import Button from './../../ui/Button';

function MenuItem({ pizza }) {
  if (!pizza) return null;
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
          <Button type="small">Add to card</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
