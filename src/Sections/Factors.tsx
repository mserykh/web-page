import { factorsData } from '../helpers/constants';
import { FactorInfo } from '../helpers/types';

import FactorCard from '../components/FactorCard/FactorCard';
import Section from '../layouts/Section';

const Factors = () => {
  const factorsList = factorsData.map((f: FactorInfo, i: number) => (
    <li
      key={f.id.toString()}
      className="factor-card p-6 w-full md:grid md:grid-cols-4 md:grid-rows-3 text-slate-100"
    >
      <FactorCard factorInfo={f} factorIconId={(i + 1).toString()} />
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
