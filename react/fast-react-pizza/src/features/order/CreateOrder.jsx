import { useState } from 'react';

import { Form } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../cart/cartSlice';
import CartEmpty from '../cart/CartEmpty';
import OrderButton from './ui/OrderButton';
import InputForm from './ui/InputForm';
import Input from '../../ui/Input';

//import { action } from '../services/apiOrder';

// https://uibakery.io/regex-library/phone-number

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const totalPrice = useSelector(getTotalPrice);
  const finalPrice = totalPrice + (withPriority ? totalPrice * 0.2 : 0);

  if (totalPrice === 0) return <CartEmpty />;

  return (
    <div className="p-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <InputForm type="username" />
        <InputForm type="tel" />
        <div className="relative">
          <InputForm type="address" />
          <OrderButton> Get position </OrderButton>
        </div>
        <Input
          style="checkbox"
          label="Want to yo give your order priority?"
          type="checkbox"
          name="priority"
          getter={withPriority}
          setter={setWithPriority}
        />
        <OrderButton>{finalPrice}</OrderButton>
        <InputForm type="hiddens" />
      </Form>
    </div>
  );
}
export default CreateOrder;
