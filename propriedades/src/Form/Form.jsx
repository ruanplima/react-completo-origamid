import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <div>
      <form>
        <Input id='email' label="Email" />
        <Input id='senha' label="Senha" required type='password' />
        <Button />
      </form>
    </div>
  );
};

export default Form;
