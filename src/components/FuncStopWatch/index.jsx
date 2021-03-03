import React, { useState, useEffect } from 'react';
import { format, addMilliseconds } from 'date-fns';

const StopWatch = props => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const switchStopWatch = () => setIsRunning(!isRunning);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime(time => addMilliseconds(time, 1000));
      }, 1000);

      return () => {
        clearInterval(id);
      };
    }
  }, [isRunning, time]);

  return (
    <div>
      <h1>{format(time, 'HH:mm:ss')}</h1>
      <button onClick={switchStopWatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button
        onClick={() => {
          setTime(new Date(0, 0, 0, 0, 0, 0, 0));
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
