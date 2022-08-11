import { UseFormReturn } from 'react-hook-form';
import { FormValues } from './Form';

type EmailInputProps = {
  form: UseFormReturn<FormValues>;
};

const EmailInput = ({ form }: EmailInputProps): JSX.Element => {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        {...form.register('email', {
          required: 'Please type your email',
          minLength: {
            value: 2,
            message: 'The title should contain at least 2 characters',
          },
          onBlur: () => form.clearErrors('email'),
        })}
        className=""
        name="email"
        id="email"
        type="email"
        placeholder="Type your email"
      />
      {form.formState.errors.email?.message && (
        <p className="">{form.formState.errors.email.message}</p>
      )}
    </div>
  );
};

export default EmailInput;
