// import { useState } from "react";

import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { useSelector } from 'react-redux';
//import { action } from '../services/apiOrder';

// https://uibakery.io/regex-library/phone-number

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const username = useSelector((store) => store.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

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
          defaultValue={username}
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
        />

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'Placing order...' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default CreateOrder;
