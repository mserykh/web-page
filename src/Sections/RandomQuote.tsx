import { useEffect, useState } from 'react';
import Quote from '../components/Quote';
import Section from '../layouts/Section';
import Spinner from '../components/Spinner';
import { QuoteResponse } from '../helpers/models';
import getQuote from '../services/api';

const RandomQuote = () => {
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      loadQuote();
    }, 750);

    return () => clearTimeout(timeout);
  }, []);

  const loadQuote = (): void => {
    getQuote()
      .then((result) => {
        setQuote(result);
        setIsLoading(false);
        setError(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
    setIsLoading(true);
  };

  let quoteData;

  if (isLoading) {
    quoteData = <Spinner />;
  } else if (error) {
    quoteData = (
      <p className="text-md leading-8">
        Oops. Something went wrong. Please check it later
      </p>
    );
  } else if (quote) {
    quoteData = <Quote quoteInfo={quote} />;
  }

  return (
    <Section id="quote" title="Random quote" color="">
      <div className="mx-auto px-6 py-6 lg:py-12 w-3/4">{quoteData}</div>
      <button
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            loadQuote();
          }, 750);
        }}
        className=""
      >
        Another quote please
      </button>
    </Section>
  );
};

export default RandomQuote;
