import { FactorInfo } from '../helpers/types';

type CardProps = {
  factorInfo: FactorInfo;
};

const FactorCard = ({ factorInfo }: CardProps) => {
  function beautifyNumber(number: number): string {
    const string = number.toString();
    const result = number < 10 ? `0${string}` : string;
    return result;
  }

  return (
    <>
      <span>{beautifyNumber(factorInfo.id)}.</span>
      <h4 className="text-3xl font-bold leading-10">{factorInfo.title}</h4>
      <p className="text-xl">{factorInfo.description}</p>
    </>
  );
};

export default FactorCard;
