import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormValues } from './Form';

type NameInputProps = {
  form: UseFormReturn<FormValues>;
};

const NameInput = ({ form }: NameInputProps): JSX.Element => {
  return (
    <div className="input-wrapper">
      <label htmlFor="name" className="label">
        Your name:
      </label>
      <input
        {...form.register('name', {
          required: 'Please type your name',
          minLength: {
            value: 2,
            message: 'The name should contain at least 2 characters',
          },
          onBlur: () => form.clearErrors('name'),
        })}
        className="input"
        name="name"
        id="name"
        type="text"
        placeholder="Type your name"
      />
      {form.formState.errors.name?.message && (
        <p className="">{form.formState.errors.name.message}</p>
      )}
    </div>
  );
};

export default NameInput;
