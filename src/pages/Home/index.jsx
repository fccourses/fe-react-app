import React, { useState } from 'react';
import Tracker from '../../components/FuncTracker';

const Home = props => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>SWITCH</button>
      {isVisible && <Tracker />}
    </div>
  );
};

export default Home;
