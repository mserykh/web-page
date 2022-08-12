import { useForm } from 'react-hook-form';

import EmailInput from './EmailInput';
import NameInput from './NameInput';

export type FormValues = {
  email: string;
  name: string;
};

type FormProps = {
  showPopup: (name: string) => void;
};

const Form = ({ showPopup }: FormProps): JSX.Element => {
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
    showPopup(data.name);
    form.reset();
  };

  return (
    <div className="">
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
        data-testid="form"
      >
        <EmailInput form={form} />
        <NameInput form={form} />
        <button type="submit" disabled={isSubmitDisabled}>
          Subcribe to IT news
        </button>
      </form>
    </div>
  );
};

export default Form;
