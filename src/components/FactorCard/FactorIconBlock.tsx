import FactorIcon from './FactorIcon';

type FactorIconProps = {
  isVisible: boolean;
  factorIconId: string;
};

const FactorIconBlock = (props: FactorIconProps) => {
  const randomClass = (): number => Math.floor(Math.random() * 12) + 1;
  const randomClassValue = randomClass();

  return (
    <div
      className={`w-32 h-32 lg:w-48 lg:h-48 relative grid place-items-end transition delay-150 duration-200 ${
        props.isVisible
          ? 'translate-x-0 opacity-100'
          : 'opacity-0 -translate-x-[200%]'
      }`}
    >
      <FactorIcon factorIconId={props.factorIconId} />
      <div
        className={`animate-[spin_10s_linear_infinite] w-32 h-32 lg:w-48 lg:h-48 absolute blur-sm opacity-60 bg-gradient-to-r from-indigo-500 to-fuchsia-500 funky-border-${randomClassValue}`}
      ></div>
    </div>
  );
};

export default FactorIconBlock;
