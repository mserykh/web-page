type FactorNumberProps = {
  isVisible: boolean;
  factorNumber: number;
};

const FactorNumber = (props: FactorNumberProps) => {
  function beautifyNumber(number: number): string {
    const string = number.toString();
    const result = number < 10 ? `0${string}` : string;
    return result;
  }
  return (
    <span
      className={`mr-4 lg:mr-10 leading-none opacity-0 font-black text-[120px] transition delay-50 duration-200 ${
        props.isVisible
          ? 'translate-y-0 opacity-40'
          : 'opacity-0 -translate-y-full'
      }`}
    >
      {beautifyNumber(props.factorNumber)}
    </span>
  );
};

export default FactorNumber;
