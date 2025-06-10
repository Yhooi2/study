import { useSelector } from 'react-redux';
import Input from '../../../ui/Input';
import { useActionData } from 'react-router-dom';

function InputForm({ type }) {
  const {
    username,
    address,
    error: errorPosition,
    status: statusPosition,
    position: positionUser,
  } = useSelector((state) => state.user);
  const isLoading = statusPosition === 'loading';
  const cart = useSelector((state) => state.cart.cart);
  const formErrors = useActionData();

  if (type === 'address')
    return (
      <Input
        style="form"
        label="Address"
        type="text"
        name="address"
        getter={address}
        disabled={isLoading}
        error={errorPosition}
      />
    );
  if (type === 'username') {
    return (
      <Input
        style="form"
        label="First Name"
        type="text"
        name="customer"
        getter={username}
      />
    );
  }
  if (type === 'tel') {
    return (
      <Input
        style="form"
        label="Phone number"
        type="tel"
        name="phone"
        error={formErrors?.phone}
      />
    );
  }
  if (type === 'hiddens')
    return (
      <div>
        <input
          type="hidden"
          name="position"
          value={
            positionUser.latitude
              ? `${positionUser.latitude} ${positionUser.longitude}`
              : ''
          }
        />
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      </div>
    );
}

export default InputForm;
