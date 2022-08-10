import Section from '../components/Section';

const Subscribe = () => {
  return (
    <Section id="about" title="What Is the Twelve-Factor Methodology?">
      <p className="text-lg">
        The twelve-factor methodology is a set of twelve best practices to
        develop applications developed to run as a service. This was originally
        drafted by Heroku for applications deployed as services on their cloud
        platform, back in 2011. Over time, this has proved to be generic enough
        for any software-as-a-service (SaaS) development.
      </p>
    </Section>
  );
};

export default Subscribe;
