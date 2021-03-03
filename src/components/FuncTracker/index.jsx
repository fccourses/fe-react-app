import React, { useState, useEffect } from 'react';

const Clicker = props => {
  const [clickCount, setClickCount] = useState(0);
  const [step, setStep] = useState(10);

  const changeStep = ({ target: { value } }) => setStep(Number(value));

  useEffect(() => {
    const handleClick = () => {
      setClickCount(prevCount => prevCount + step);
    };
    document.body.addEventListener('mousemove', handleClick);
    console.log('test');

    return function () {
      document.body.removeEventListener('mousemove', handleClick);
    };
  }, [step]);

  return (
    <div>
      <input type='number' value={step} onChange={changeStep} />
      <h1>Click: {clickCount}</h1>
    </div>
  );
};

export default Clicker;
