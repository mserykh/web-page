import { UseFormReturn } from 'react-hook-form';
type EmailInputProps = {
  form: UseFormReturn<FormData>;
};
const EmailInput = ({ form }: EmailInputProps): JSX.Element => {
  return (
    <div className="">
      <label className="" htmlFor="email">
        Email:
      </label>
      <input
        {...form.register('email', {
          required: 'Please type ypur email',
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
        <p className={styles.errorText}>
          {form.formState.errors.email.message}
        </p>
      )}
    </div>
  );
};

export default EmailInput;
