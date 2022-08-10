import { QuoteResponse } from '../helpers/models';

type QuoteProps = {
  quoteInfo: QuoteResponse;
};

const Quote = ({ quoteInfo }: QuoteProps) => {
  return (
    <>
      <blockquote className="mb-4 flex items-center leading-8">
        <p>
          <em>{`"${quoteInfo.en}"`}</em>
        </p>
      </blockquote>
      <p className=""> - {quoteInfo.author}</p>
    </>
  );
};

export default Quote;
