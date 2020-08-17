import yelp from '../api/yelp';
import { useState, useEffect } from 'react';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi();
  }, []);

  const searchApi = async (term) => {
    try {
      const response = await yelp.get(`/search`, {
        params: {
          term,
          limit: 50,
          location: 'Lamezia Terme',
        },
      });
      const restaurants = response.data.businesses;
      setResults(restaurants);
    } catch (err) {
      setErrorMessage('Something went wrong, try later.');
    }
  };

  return [searchApi, results, errorMessage];
};
