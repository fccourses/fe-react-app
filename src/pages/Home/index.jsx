import React, { useState } from 'react';
import Clicker from '../../components/FuncTracker';

const Home = props => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>SWITCH</button>
      {isVisible && <Clicker />}
    </div>
  );
};

export default Home;
