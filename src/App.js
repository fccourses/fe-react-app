import React, { useState } from 'react';
import './App.css';
import WindowSizes from './components/WindowSizes';
// import UsersLoader from './components/UsersLoader';
// import ImageWrapper from './components/ImageWrapper';
// import UserCard from './components/UserList/UserCard';
// import Aloha from './components/AlohaDashboard/Aloha';
// import Calendar from './components/Calendar';
// import Carousel from './components/Carousel';

const App = props => {
  const [state, setstate] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setstate(!state);
        }}
      >
        Check
      </button>
      {state && <WindowSizes />}
    </>
  );
};

export default App;
