type HeroProps = {
  children?: React.ReactNode;
};

const Hero = (props: HeroProps) => {
  return (
    <p className="text-6xl font-bold">
      Helps to develop modular, independent, portable, and scalable an
      applications.
    </p>
  );
};

export default Hero;
