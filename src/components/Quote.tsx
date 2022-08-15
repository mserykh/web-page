import { QuoteResponse } from '../helpers/models';

type QuoteProps = {
  quoteInfo: QuoteResponse;
};

const Quote = ({ quoteInfo }: QuoteProps) => {
  return (
    <div className="relative mx-auto max-w-prose lg:text-3xl">
      <blockquote className="mb-4 flex items-center text-slate-400 ">
        <p>{`"${quoteInfo.en}"`}</p>
      </blockquote>
      <p className="text-lime-400 font-semibold"> - {quoteInfo.author}</p>
    </div>
  );
};

export default Quote;
