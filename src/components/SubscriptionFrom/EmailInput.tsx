import { UseFormReturn } from 'react-hook-form';
import { FormValues } from './Form';

type EmailInputProps = {
  form: UseFormReturn<FormValues>;
};

const EmailInput = ({ form }: EmailInputProps): JSX.Element => {
  return (
    <div className="input-wrapper">
      <label htmlFor="email" className="label">
        Email:
      </label>
      <input
        {...form.register('email', {
          required: 'Please type your email',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
          onBlur: () => form.clearErrors('email'),
        })}
        className="input"
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
