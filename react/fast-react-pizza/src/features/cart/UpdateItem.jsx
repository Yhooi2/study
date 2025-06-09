import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from './cartSlice';

function UpdateItem({ children, id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      {children}
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
      <Button type="small" onClick={() => dispatch(deleteItem(id))}>
        Delete
      </Button>
    </div>
  );
}

export default UpdateItem;
