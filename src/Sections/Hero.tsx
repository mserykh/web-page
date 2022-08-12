import SectionHero from '../layouts/SectionHero';
import videoUrl from '../assets/videos/hero@reduced.mp4';
import smallVideoUrl from '../assets/videos/hero@480.mp4';
import logo from '../assets/icons/logo.png';

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
      <img src={logo} className="h-56" alt="" />
      <p className="text-left text-3xl md:text-5xl lg:text-7xl">
        Helps to develop{' '}
        <span className="text-4xl md:text-6xl lg:text-8xl">modular</span>,<br />
        <span className="text-4xl md:text-6xl lg:text-8xl">
          independent
        </span>,{' '}
        <span className="text-4xl md:text-6xl lg:text-8xl">portable</span>,
        <br />
        and <span className="text-4xl md:text-6xl lg:text-8xl">
          scalable
        </span>{' '}
        applications
      </p>
    </SectionHero>
  </>
);

export default Hero;
