import { ENDPOINT } from '../helpers/constants';
import { QuoteResponse } from '../helpers/models';

const getQuote = async (): Promise<QuoteResponse | null> => {
  try {
    const res = await fetch(`${ENDPOINT}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${ENDPOINT}, received ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    throw new Error();
  }
};

export default getQuote;
