import SectionHero from '../layouts/SectionHero';
import videoUrl from '../assets/videos/hero@reduced.mp4';
import smallVideoUrl from '../assets/videos/hero@480.mp4';
import HeroLead from '../components/HeroLead';

const Hero = () => (
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
      <HeroLead />
    </SectionHero>
  </>
);

export default Hero;
