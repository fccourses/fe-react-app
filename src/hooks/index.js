import { useState, useEffect } from 'react';

/**
 *
 * @param {function} getData
 */
function useData (getData) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);

    getData()
      .then(data => {
        const { results } = data;
        setData(results);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setIsFetching(false));
  }, []);

  return {
    data,
    error,
    isFetching,
  };
}

export default useData;
