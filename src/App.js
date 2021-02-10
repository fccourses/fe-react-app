import React from 'react';
import './App.css';
import Aloha from './components/Greeting';

function App() {
  const user = {
    firstName: 'Sasha',
    url: 'http://localhost:3000/favicon.ico',
  };
  return (
    <>
      <Aloha name={user.firstName} photo={user.url} />
      <Aloha name='Masha' />
      <Aloha name='Dasha' />
    </>
  );
}

export default App;
