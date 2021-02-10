import React from 'react';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  const user = {
    firstName: 'Sasha',
    url: 'http://localhost:3000/favicon.ico',
  };
  return (
    <>
      <Greeting name={user.firstName} photo={user.url} />
      <Greeting name='Masha' />
      <Greeting name='Dasha' />
    </>
  );
}

export default App;
