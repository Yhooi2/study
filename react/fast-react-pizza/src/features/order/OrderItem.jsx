import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, unitPrice } = item;

  return (
    <li className="gap-2 space-y-1">
      <div className="my-3 flex flex-wrap items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(unitPrice * quantity)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
