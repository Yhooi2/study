import { useState } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>
      <Input />

    </form>
  );
}

export default CreateUser;
