import { styles } from './styles';

function OrderHeader({ id, priority, status }) {
  return (
    <div className={styles.row}>
      <h2 className="text-xl font-semibold">Order #{id} status</h2>

      <div className="space-x-2 uppercase">
        {priority && (
          <span className={`${styles.badge} bg-red-500 text-red-50`}>
            Priority
          </span>
        )}
        <span className={`${styles.badge} bg-green-500 text-green-50`}>
          {status} order
        </span>
      </div>
    </div>
  );
}

export default OrderHeader;
