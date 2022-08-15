import { useEffect, useRef, useState } from 'react';

const AboutCard = () => {
  const cardEl = useRef<HTMLDivElement | HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '0px 0px -250px 0px' }
    );
    if (cardEl && cardEl.current) {
      observer.observe(cardEl.current);
    }
  }, [isVisible]);

  return (
    <p
      ref={cardEl}
      className={`mx-auto max-w-prose text-xl lg:text-3xl font-mono transition delay-100 duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      The twelve-factor methodology is a set of twelve best practices to develop
      applications developed to run as a service. This was originally drafted by
      Heroku for applications deployed as services on their cloud platform, back
      in 2011. Over time, this has proved to be generic enough for any
      software-as-a-service (SaaS) development.
    </p>
  );
};

export default AboutCard;
