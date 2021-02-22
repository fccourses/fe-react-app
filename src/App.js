import React from 'react';
import './App.css';
import UsersLoader from './components/UsersLoader';
// import ImageWrapper from './components/ImageWrapper';
// import UserCard from './components/UserList/UserCard';
// import Aloha from './components/AlohaDashboard/Aloha';
// import Calendar from './components/Calendar';
// import Carousel from './components/Carousel';

const NamedList = props => {
  const { children, name } = props;
  return (
    <article>
      <h1>{name}</h1>
      <div title='test'>{children}</div>
    </article>
  );
};

const App = props => {
  return (
    <>
      <UsersLoader />
    </>
  );
};

export default App;
