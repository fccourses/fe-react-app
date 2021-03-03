import React, { useState } from 'react';
import StopWatch from '../../components/FuncStopWatch';
import Clicker from '../../components/FuncTracker';

const Home = props => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>SWITCH</button>
      {/* {isVisible && <Clicker />} */}
      <StopWatch />
    </div>
  );
};

export default Home;
