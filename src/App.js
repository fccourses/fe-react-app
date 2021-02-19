import React from 'react';
import './App.css';
import ImageWrapper from './components/ImageWrapper';
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
      <ImageWrapper
        width='50%'
        height='50vh'
        style={{ border: '20px solid red' }}
        onClick={alert}
        title='test'
        tabIndex='1'
      >
        <img
          alt=''
          src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
        />
      </ImageWrapper>
    </>
  );
};

export default App;
