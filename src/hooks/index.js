import { useState, useEffect } from 'react';

/**
 *
 * @param {function} getData
 */
export function useData (getData) {
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


export function useMouse () {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = ({ clientX, clientY }) => {
      setCoordinates({ x: clientX, y: clientY });
    };
    document.body.addEventListener('mousemove', handleMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return coordinates;
}


