import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormValues } from './Form';

type NameInputProps = {
  form: UseFormReturn<FormValues>;
};

const NameInput = ({ form }: NameInputProps): JSX.Element => {
  return (
    <div>
      <label htmlFor="name">Your name:</label>
      <input
        {...form.register('name', {
          required: 'Please type your name',
          minLength: {
            value: 2,
            message: 'The name should contain at least 2 characters',
          },
          onBlur: () => form.clearErrors('email'),
        })}
      />
      {form.formState.errors.name?.message && (
        <p className="">{form.formState.errors.name.message}</p>
      )}
    </div>
  );
};

export default NameInput;
