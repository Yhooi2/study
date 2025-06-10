import { useState } from 'react';

import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPrice } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { feathAddress } from '../user/userSlice';
import CartEmpty from '../cart/CartEmpty';
//import { action } from '../services/apiOrder';

// https://uibakery.io/regex-library/phone-number

function CreateOrder() {
  const {
    username,
    address,
    position: positionUser,
    error: errorPosition,
    status: statusPosition,
  } = useSelector((store) => store.user);

  const isLoading = statusPosition === 'loading';

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();

  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = useSelector(getTotalPrice);
  const finalPrice = totalPrice + (withPriority ? totalPrice * 0.2 : 0);

  const dispatch = useDispatch();

  const handlePosition = (e) => {
    e.preventDefault();
    dispatch(feathAddress());
  };
  if (totalPrice === 0) return <CartEmpty />;

  return (
    <div className="p-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <Input
          style="form"
          label="First Name"
          type="text"
          name="customer"
          getter={username}
        />

        <Input
          style="form"
          label="Phone number"
          type="tel"
          name="phone"
          error={formErrors?.phone}
        />

        <div className="relative">
          <Input
            style="form"
            label="Addres"
            type="text"
            name="address"
            getter={address}
            disabled={isLoading}
            error={errorPosition}
          />
          {!positionUser.latitude && (
            <span className="absolute right-[3px] top-[26.6px] sm:top-[2.6px] md:right-[4.5px] md:top-[16.5px]">
              <Button
                type="small"
                onClick={handlePosition}
                disabled={isLoading}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <Input
          style="checkbox"
          label="Want to yo give your order priority?"
          type="checkbox"
          name="priority"
          getter={withPriority}
          setter={setWithPriority}
        />

        <div>
          <Button disabled={isSubmitting || isLoading}>
            {isSubmitting
              ? 'Placing order...'
              : `Order now ${formatCurrency(finalPrice)}`}
          </Button>
        </div>

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
      </Form>
    </div>
  );
}
export default CreateOrder;
