import { useEffect, useState } from 'react';
import Quote from '../components/Quote';
import Section from '../components/Section';
import Spinner from '../components/Spinner';
import { QuoteResponse } from '../helpers/models';
import apiService from '../services/api';

const RandomQuote = () => {
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = (): void => {
    setIsLoading(true);
    apiService()
      .then((result) => {
        setQuote(result);
        setIsLoading(false);
        setError(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  };

  let quoteData;

  if (isLoading) {
    quoteData = <Spinner />;
  } else if (error) {
    quoteData = <p>Please try again</p>;
  } else if (quote) {
    quoteData = <Quote quoteInfo={quote} />;
  }
  console.log('rerender');

  return (
    <Section id="fact" title="Random quote">
      <div className="mx-auto min-h-12 px-12 py-4 w-3/4 bg-orange-50 text-violet-600 rounded-lg">
        {quoteData}
      </div>
      <button
        onClick={getQuote}
        className="block mx-auto mt-4 px-4 uppercase font-bold border-2 border-orange-50"
      >
        Another one please
      </button>
    </Section>
  );
};

export default RandomQuote;
