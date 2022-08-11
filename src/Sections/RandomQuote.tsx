import { useEffect, useState } from 'react';
import Quote from '../components/Quote';
import Section from '../components/Section';
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
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const loadQuote = (): void => {
    setTimeout(() => {
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
    }, 750);
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
    <Section id="quote" title="Random quote">
      <div className="mx-auto min-h-40 max-h-full px-12 py-4 w-3/4 bg-orange-50 text-violet-600 rounded-lg">
        {quoteData}
      </div>
      <button
        onClick={loadQuote}
        className="block mx-auto mt-12 px-4 uppercase font-bold border-2 border-orange-50"
      >
        Another one please
      </button>
    </Section>
  );
};

export default RandomQuote;
