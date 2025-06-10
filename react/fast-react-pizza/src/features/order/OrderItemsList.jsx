import { useEffect } from 'react';
import OrderItem from './OrderItem';
import { useFetcher } from 'react-router-dom';

function OrderItemsList({ cart }) {
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') {
      fetcher.load('/menu');
    }
  }, [fetcher]);

  const isLoadingIngredients = fetcher.state === 'loading';

  return (
    <ul className="divide-y border-y">
      {cart.map((item) => (
        <OrderItem
          item={item}
          key={item.pizzaId}
          isLoadingIngredients={isLoadingIngredients}
          ingredients={
            fetcher.data?.find((it) => it.id === item.pizzaId)?.ingredients ??
            []
          }
        />
      ))}
    </ul>
  );
}

export default OrderItemsList;
