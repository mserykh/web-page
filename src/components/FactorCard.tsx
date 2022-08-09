import { FactorInfo } from '../helpers/types';

type CardProps = {
  factorInfo: FactorInfo;
};

const FactorCard = ({ factorInfo }: CardProps) => {
  return (
    <>
      <h4>{factorInfo.title}</h4>
      <p>{factorInfo.description}</p>
    </>
  );
};

export default FactorCard;
