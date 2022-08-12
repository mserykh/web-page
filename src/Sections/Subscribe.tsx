import Section from '../layouts/Section';
import Form from '../components/SubscriptionFrom/Form';
import BonusImage from '../components/BonusImage';
import Modal from '../components/Modal';
import { useEffect, useState } from 'react';

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentName, setCurrentName] = useState('');

  const showPopup = (currentName: string): void => {
    setIsOpen(true);
    setCurrentName(currentName);
  };

  const handleClose = (): void => {
    setIsOpen(false);
    setCurrentName('');
  };

  useEffect(() => {
    const timeout = setTimeout(() => handleClose(), 5000);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  const moveHandler = (
    event: React.MouseEvent<HTMLElement> | React.PointerEvent<HTMLElement>
  ) => {
    const posX = -event.screenX / 25;
    const posY = -event.screenY / 50;

    document.documentElement.style.setProperty('--posX', posX.toString());
    document.documentElement.style.setProperty('--posY', posY.toString());
  };

  const leaveHandler = () => {
    document.documentElement.style.setProperty('--posX', '0');
    document.documentElement.style.setProperty('--posY', '0');
  };

  return (
    <Section title={'Bonus factor'} id="bonus">
      <p className="font-mono mb-8 text-center lg:mb-16 text-3xl text-lime-400">
        There is another important factor. Get it to your email!
      </p>
      <div
        onMouseMove={moveHandler}
        onMouseLeave={leaveHandler}
        onPointerMove={moveHandler}
        onPointerLeave={leaveHandler}
        onPointerOver={moveHandler}
        className="mx-auto flex flex-col gap-4 lg:gap-8 lg:flex-row md:items-center justify-center"
      >
        <BonusImage />
        <Form showPopup={showPopup} />
      </div>
      <Modal name={currentName} isOpen={isOpen} handleClose={handleClose} />
    </Section>
  );
};

export default Subscribe;
