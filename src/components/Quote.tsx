import { useEffect } from 'react';
import { QuoteResponse } from '../helpers/models';

type QuoteProps = {
  quoteInfo: QuoteResponse;
};

const Quote = ({ quoteInfo }: QuoteProps) => {
  return (
    <div className="mx-auto max-w-prose">
      <blockquote className="mb-4 flex items-center leading-8">
        <p>
          <em>{`"${quoteInfo.en}"`}</em>
        </p>
      </blockquote>
      <p className="transition-all"> - {quoteInfo.author}</p>
    </div>
  );
};

export default Quote;
