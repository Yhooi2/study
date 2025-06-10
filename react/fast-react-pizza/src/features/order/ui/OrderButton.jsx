import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../ui/Button';
import { styles } from './../styles';
import { feathAddress } from '../../user/userSlice';
import { useNavigation } from 'react-router-dom';
import { formatCurrency } from '../../../utils/helpers';

function OrderButton({ children }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const { status: statusPosition, position: positionUser } = useSelector(
    (state) => state.user,
  );
  const isLoading = statusPosition === 'loading';
  const dispatch = useDispatch();
  const handlePosition = (e) => {
    e.preventDefault();
    dispatch(feathAddress());
  };

  if (typeof children === 'number') {
    return (
      <Button disabled={isSubmitting || isLoading}>
        {isSubmitting
          ? 'Placing order...'
          : `Order now ${formatCurrency(children)}`}
      </Button>
    );
  }
  if (positionUser.latitude) return null;
  return (
    <span className={styles.position}>
      <Button type="small" onClick={handlePosition} disabled={isLoading}>
        {children}
      </Button>
    </span>
  );
}

export default OrderButton;
