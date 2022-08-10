import SectionHero from '../components/SectionHero';

type HeroProps = {
  children?: React.ReactNode;
};

const Hero = (props: HeroProps) => {
  return (
    <SectionHero>
      <p className="w-3/4 md:w-full text-left text-6xl font-bold">
        Helps to develop modular, independent, portable, and scalable
        applications.
      </p>
    </SectionHero>
  );
};

export default Hero;
