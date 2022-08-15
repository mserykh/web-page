type FactorIconProps = {
  factorIconId: string;
};

const FactorIcon = ({ factorIconId }: FactorIconProps) => {
  return (
    <img
      className={`w-24 h-24 lg:w-28 lg:h-28 opacity-60 z-10`}
      src={`./icons/f${factorIconId}.svg`}
      alt=""
    />
  );
};

export default FactorIcon;
