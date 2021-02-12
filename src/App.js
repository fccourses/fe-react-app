import React, { Component, useState } from 'react';
import './App.css';
import StopWatch from './components/StopWatch';

function App(props) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Change</button>
      {isVisible ? <StopWatch /> : null}
    </>
  );
}

export default App;
