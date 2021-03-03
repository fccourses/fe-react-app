import React, { useContext, useState } from 'react';
import StopWatch from '../../components/FuncStopWatch';
import Clicker from '../../components/FuncTracker';
import { UserContext } from '../../contexts';

const Home = props => {
  const [isVisible, setIsVisible] = useState(true);

  const value = useContext(UserContext);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>SWITCH</button>
      <p>{JSON.stringify(value)}</p>
      {/* {isVisible && <Clicker />} */}
      {/* <StopWatch /> */}
    </div>
  );
};

export default Home;
