import { calcMinutesLeft, formatDate } from '../../utils/helpers';
import { styles } from './styles';

function OrderDelivery({ estimatedDelivery }) {
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  return (
    <div className={styles.row + styles.summary}>
      <p className="text-base font-medium">
        {deliveryIn >= 0
          ? `Only ${deliveryIn} minutes left 😃`
          : 'Order should have arrived'}
      </p>
      <p className="text-xs text-stone-500">
        (Estimated delivery: {formatDate(estimatedDelivery)})
      </p>
    </div>
  );
}

export default OrderDelivery;
