import { useEffect, useRef, useState } from 'react';
import logo from '../assets/icons/logo.png';

const HeroLead = () => {
  const wordEl = useRef<HTMLDivElement | HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      }
    );
    if (wordEl && wordEl.current) {
      observer.observe(wordEl.current);
    }
  }, [isVisible]);

  return (
    <>
      <img src={logo} className="w-full max-w-[8rem] lg:max-w-[10rem]" alt="" />
      <p className="text-left text-3xl md:text-5xl lg:text-7xl">
        {' '}
        Helps to develop{' '}
        <span
          ref={wordEl}
          className={`${
            isVisible
              ? ' feature before:animate-[appear-right_600ms_ease-in-out_300ms] after:animate-[appear-left_600ms_ease-in-out_300ms]'
              : ''
          }`}
        >
          <span className="relative">modular</span>
        </span>
        ,
        <br />
        <span
          ref={wordEl}
          className={`${
            isVisible
              ? ' feature before:animate-[appear-right_600ms_ease-in-out_300ms] after:animate-[appear-left_600ms_ease-in-out_300ms]'
              : ''
          }`}
        >
          <span
            ref={wordEl}
            className={`${
              isVisible
                ? ' feature before:animate-[appear-right_600ms_ease-in-out_300ms] after:animate-[appear-left_600ms_ease-in-out_300ms]'
                : ''
            }`}
          >
            independent
          </span>
        </span>
        ,{' '}
        <span
          ref={wordEl}
          className={`${
            isVisible
              ? ' feature before:animate-[appear-right_600ms_ease-in-out_300ms] after:animate-[appear-left_600ms_ease-in-out_300ms]'
              : ''
          }`}
        >
          <span
            ref={wordEl}
            className={`${
              isVisible
                ? ' feature before:animate-[appear-right_600ms_ease-in-out_300ms] after:animate-[appear-left_600ms_ease-in-out_300ms]'
                : ''
            }`}
          >
            portable
          </span>
        </span>
        ,
        <br />
        and{' '}
        <span
          ref={wordEl}
          className={`${
            isVisible
              ? ' feature before:animate-[appear-right_600ms_ease-in-out_300ms] after:animate-[appear-left_600ms_ease-in-out_300ms]'
              : ''
          }`}
        >
          <span className="relative">scalable</span>
        </span>{' '}
        applications
      </p>
    </>
  );
};

export default HeroLead;
