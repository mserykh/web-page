import { useEffect } from 'react';
import { QuoteResponse } from '../helpers/models';

type QuoteProps = {
  quoteInfo: QuoteResponse;
};

const Quote = ({ quoteInfo }: QuoteProps) => {
  return (
    <div className="mx-auto max-w-prose">
      <blockquote className="mb-4 flex items-center leading-8">
        <p>{`"${quoteInfo.en}"`}</p>
      </blockquote>
      <p className=" font-semibold"> - {quoteInfo.author}</p>
    </div>
  );
};

export default Quote;
