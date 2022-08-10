import Section from '../components/Section';
import Form from '../components/SubscriptionFrom/Form';

const Subscribe = () => {
  const subscribe = ({
    email,
    name,
  }: {
    email: string;
    name: string;
  }): void => {
    console.log(
      `${name}You have subscribed with your  email ${email}! Confetti`
    );
  };

  return (
    <Section id="bonus">
      <h2>Bonus factor</h2>
      <Form subscribe={subscribe} />
    </Section>
  );
};

export default Subscribe;
