import SectionHero from '../layouts/SectionHero';
import videoUrl from '../assets/videos/hero@reduced.mp4';
import smallVideoUrl from '../assets/videos/hero@480.mp4';

type HeroProps = {
  children?: React.ReactNode;
};

const Hero = (props: HeroProps) => (
  <>
    <SectionHero id="hero">
      <video
        className="absolute top-0 bottom-0 right-0 left-0 h-full w-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src={videoUrl} type="video/mp4"></source>
        <source
          src={smallVideoUrl}
          type="video/mp4"
          media="all and (max-width: 480px)"
        ></source>
      </video>
      <p className="w-3/4 max-w-prose self-center justify-self-end text-left text-3xl md:text-5xl lg:text-7xl font-bold">
        Helps to develop modular, independent, portable, and scalable
        applications.
      </p>
    </SectionHero>
  </>
);

export default Hero;
