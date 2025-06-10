import { styles } from './styles';
import { formatCurrency } from '../../utils/helpers';

function OrderSummary({ priority, orderPrice, priorityPrice }) {
  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>Price pizza:</span>
        <span>{formatCurrency(orderPrice)}</span>
      </div>
      {priority && (
        <div className={styles.row}>
          <span>Price priority: </span>
          <span>{formatCurrency(priorityPrice)}</span>
        </div>
      )}
      <div className={styles.row + ' text-base font-bold'}>
        <span>To pay on delivery: </span>
        <span>{formatCurrency(orderPrice + priorityPrice)}</span>
      </div>
    </div>
  );
}

export default OrderSummary;
