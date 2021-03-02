import React, { useState, useEffect } from 'react';

const Tracker = props => {
  const [state, setState] = useState(0);

  const handleClick = () => setState(state + 1);

  useEffect(() => {
    document.body.addEventListener('click', handleClick);
    console.log('OUTER. Вешаем обработчик');

    return function () {
      document.body.removeEventListener('click', handleClick);
      console.log('INNER. Удаляем обработчик');
    };
  });

  return <h3>Click: {state}</h3>;
};

export default Tracker;
