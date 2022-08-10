import { factorsData } from '../helpers/constants';
import { FactorInfo } from '../helpers/types';

import FactorCard from '../components/FactorCard/FactorCard';
import Section from '../components/Section';

const Factors = () => {
  const factorsList = factorsData.map((f: FactorInfo) => (
    <li
      key={f.id.toString()}
      className="p-6 w-full max-w-3/4 bg-orange-50  text-violet-600"
    >
      <FactorCard factorInfo={f} />
    </li>
  ));

  return (
    <Section id="factors" title="The Twelve Factors">
      <ul className="flex flex-col items-center gap-6">{factorsList}</ul>
    </Section>
  );
};

export default Factors;
