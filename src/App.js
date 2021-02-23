import React from 'react';
import './App.css';
// import UsersLoader from './components/UsersLoader';
// import ImageWrapper from './components/ImageWrapper';
// import UserCard from './components/UserList/UserCard';
// import Aloha from './components/AlohaDashboard/Aloha';
// import Calendar from './components/Calendar';
// import Carousel from './components/Carousel';

const App = props => {
  return (
    <>
      <button
        onClick={() => {
          window.close();
        }}
      >
        Close application
      </button>

      <button
        onClick={() => {
          window.open('https://wikipedia.org');
        }}
      >
        Open wiki
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          window.location.assign('https://wikipedia.org');
        }}
      >
        Assign
      </button>
      <button
        onClick={() => {
          window.location.replace('https://wikipedia.org');
        }}
      >
        Replace
      </button>
      <button onClick={() => window.location.reload()}>Reload</button>
    </>
  );
};

export default App;
