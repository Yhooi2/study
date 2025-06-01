import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  if (!pizza) return null;
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 sm:h-32 md:h-48 xl:h-64 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex flex-col text-sm">
        <p className="text-base font-medium">{name}</p>
        <p className="capitalize italic">{ingredients.join(', ')}</p>
        <div className="mt-auto">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase text-stone-500">Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
