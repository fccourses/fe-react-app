import React from 'react';
import './App.css';
import StopWatch from './components/StopWatch';
import Aloha from './components/AlohaDashboard/Aloha';

function App(props) {
  return (
    <>
      <Aloha name='Aloha' />
      <StopWatch />
    </>
  );
}

export default App;
