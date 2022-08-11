import { useForm } from 'react-hook-form';

import EmailInput from './EmailInput';
import NameInput from './NameInput';

export type FormValues = {
  email: string;
  name: string;
};

type FormProps = {
  subscribe: (formData: FormValues) => void;
};

const Form = ({ subscribe }: FormProps): JSX.Element => {
  const form = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const isSubmitDisabled =
    (Object.values(form.formState.touchedFields).some(
      (element) => element === true
    ) &&
      Object.keys(form.formState.errors).length > 0) ||
    !Object.values(form.formState.touchedFields).some(
      (element) => element === true
    );

  const onSubmit = (data: FormValues): void => {
    subscribe({ ...data });
    form.reset();
  };

  return (
    <div className="">
      <form
        className=""
        onSubmit={form.handleSubmit(onSubmit)}
        data-testid="form"
      >
        <EmailInput form={form} />
        <NameInput form={form} />
        <button
          type="submit"
          className="block mx-auto mt-12 px-4 uppercase font-bold border-2 border-orange-50"
          disabled={isSubmitDisabled}
        >
          Suscribe to IT news
        </button>
      </form>
    </div>
  );
};

export default Form;
