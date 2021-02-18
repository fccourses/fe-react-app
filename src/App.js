import React from 'react';
import './App.css';
import UserCard from './components/UserList/UserCard';
import Aloha from './components/AlohaDashboard/Aloha';
import Calendar from './components/Calendar';
import Carousel from './components/Carousel';

function App (props) {
  const user = {
    first: 'John',
    last: 'Doe'
  };

  return (
    <>
      <UserCard user={{}} />
    </>
  );
}

export default App;
