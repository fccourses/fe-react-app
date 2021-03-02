import React, { useState } from 'react';

const Home = props => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const clickHandler = () => {
    setCount(count + step);
  };

  const onChangeHandler = ({ target: { value } }) => {
    setStep(Number(value));
  };

  console.log('function');

  return (
    <div>
      <h1>Home page</h1>
      <h2>Count: {count}</h2>
      <input type='number' onChange={onChangeHandler} value={step} />
      <button onClick={clickHandler}>Increment</button>
    </div>
  );
};

export default Home;
