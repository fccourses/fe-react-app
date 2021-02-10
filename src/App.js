import React from 'react';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <Greeting name='Vlad' />
      <Greeting name='Masha' />
      <Greeting name='Dasha' />
    </>
  );
}

export default App;
