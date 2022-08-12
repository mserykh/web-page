type FactorIconProps = {
  factorIconId?: string;
};

const FactorIcon = (props: FactorIconProps) => {
  const logo = require(`../../assets/icons/f${props.factorIconId}.svg`);
  return (
    <img
      className={`w-24 h-24 lg:w-28 lg:h-28 opacity-60 z-10`}
      src={logo}
      alt=""
    />
  );
};

export default FactorIcon;
