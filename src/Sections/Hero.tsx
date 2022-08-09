import Section from '../components/Section';

type HeroProps = {
  children?: React.ReactNode;
};

const Hero = (props: HeroProps) => {
  return (
    <Section>
      <p className="text-6xl font-bold">
        Helps to develop modular, independent, portable, and scalable an
        applications.
      </p>
    </Section>
  );
};

export default Hero;
