import React, { useState } from 'react';

const Home = props => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });
  
  const [count, setCount] = useState(0);

  const handleMouseMove = event =>
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
    });

  const onClick = () => setCount(count + 1);

  return (
    <div
      style={{ height: '100vh', border: '5px solid red' }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
    >
      <h1>Home page</h1>
      <h3>X: {coordinates.x}</h3>
      <h3>Y: {coordinates.y}</h3>
      <h3>Count: {count}</h3>
    </div>
  );
};

export default Home;
