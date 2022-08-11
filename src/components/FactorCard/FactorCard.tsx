import { useEffect, useRef, useState } from 'react';
import { FactorInfo } from '../../helpers/types';
import FactorIcon from './FactorIcon';
import FactorNumber from './FactorNumber';

type CardProps = {
  factorInfo: FactorInfo;
};

const FactorCard = ({ factorInfo }: CardProps) => {
  const cardEl = useRef<HTMLDivElement | HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      }
    );
    if (cardEl && cardEl.current) {
      observer.observe(cardEl.current);
    }
  }, [isVisible]);

  return (
    <>
      <div className="flex gap-4 lg:gap-8 place-self-end items-center row-start-1 row-end-3 col-start-1 col-end-3">
        <FactorIcon isVisible={isVisible} />
        <FactorNumber isVisible={isVisible} factorNumber={factorInfo.id} />
      </div>
      <div ref={cardEl} className="row-start-2 row-end-4 col-start-3 col-end-5">
        <h4
          className={`mb-4 text-4xl lg:text-6xl font-bold transition delay-150 duration-500 ${
            isVisible ? 'translate-x-0' : 'opacity-0 translate-x-[50%]'
          }`}
        >
          {factorInfo.title}
        </h4>
        <p
          ref={cardEl}
          className={`max-w-prose text-3xl transition delay-200 duration-500 ${
            isVisible ? 'translate-x-0' : 'opacity-0 translate-x-[50%]'
          }`}
        >
          {factorInfo.description}
        </p>
      </div>
    </>
  );
};

export default FactorCard;
