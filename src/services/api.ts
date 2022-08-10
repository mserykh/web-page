import { ENDPOINT } from '../helpers/constants';
import { QuoteResponse } from '../helpers/models';

const apiService = async (): Promise<QuoteResponse | null> => {
  const getResponse = async () => {
    try {
      const res = await fetch(`${ENDPOINT}`);
      if (!res.ok) {
        throw new Error(`Could not fetch ${ENDPOINT}, received ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };
  const res = await getResponse();

  return res;
};

export default apiService;
