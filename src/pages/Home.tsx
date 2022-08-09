import About from '../Sections/About';
import Factors from '../Sections/Factors';
import Hero from '../Sections/Hero';
import Subscribe from '../Sections/Subscribe';

const Home = () => {
  return (
    <>
      <h1>12-factor apps</h1>
      <Hero />
      <About />
      <Factors />
      <Subscribe />
    </>
  );
};

export default Home;
