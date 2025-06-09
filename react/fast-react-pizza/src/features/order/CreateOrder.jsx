import { useState } from 'react';

import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helpers';
//import { action } from '../services/apiOrder';

// https://uibakery.io/regex-library/phone-number

function CreateOrder() {
  const username = useSelector((store) => store.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();

  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = useSelector(getTotalPrice);
  const finalPrice = totalPrice + (withPriority ? totalPrice * 0.2 : 0);

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
          setter={username}
        />

        <Input
          style="form"
          label="Phone number"
          type="tel"
          name="phone"
          error={formErrors?.phone}
        />

        <Input style="form" label="Addres" type="text" name="address" />

        <Input
          style="checkbox"
          label="Want to yo give your order priority?"
          type="checkbox"
          name="priority"
          getter={withPriority}
          setter={setWithPriority}
        />

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting
              ? 'Placing order...'
              : `Order now ${formatCurrency(finalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default CreateOrder;
