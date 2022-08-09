import { factorsData } from '../helpers/constants';
import { FactorInfo } from '../helpers/types';

import FactorCard from '../components/FactorCard';
import Section from '../components/Section';

const Factors = () => {
  const factorsList = factorsData.map((f: FactorInfo) => (
    <li key={f.id.toString()}>
      <FactorCard factorInfo={f} />
    </li>
  ));

  return (
    <Section id="factors" title="The Twelve Factors">
      <ul>{factorsList}</ul>
    </Section>
  );
};

export default Factors;
