import { isVisible } from '@testing-library/user-event/dist/utils';
import icon from '../../assets/icons/icon.svg';

type FactorIconProps = {
  isVisible: boolean;
  factorIcon?: string;
};

const FactorIcon = (props: FactorIconProps) => {
  return (
    <img
      className={`w-36 h-36 transition delay-150 duration-200 ${
        props.isVisible
          ? 'translate-x-0 opacity-100'
          : 'opacity-0 -translate-x-[200%]'
      }`}
      src={icon}
      alt=""
    />
  );
};

export default FactorIcon;
