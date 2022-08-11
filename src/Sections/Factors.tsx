import { factorsData } from '../helpers/constants';
import { FactorInfo } from '../helpers/types';

import FactorCard from '../components/FactorCard/FactorCard';
import Section from '../layouts/Section';

const Factors = () => {
  const factorsList = factorsData.map((f: FactorInfo) => (
    <li
      key={f.id.toString()}
      className="p-6 w-full max-w-3/4 grid grid-cols-4 grid-rows-3 text-orange-50"
    >
      <FactorCard factorInfo={f} />
    </li>
  ));

  return (
    <Section id="factors" title="The Twelve Factors">
      <ul className="flex flex-col items-center gap-6 lg:gap-y-24">
        {factorsList}
      </ul>
    </Section>
  );
};

export default Factors;
