import React from 'react';
import './App.css';
import FlexContainer from './components/FlexContainer';
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
      <FlexContainer jc='center' ai='center' column reverse>
        <div>test 1</div>
        <div>test 2</div>
        <div>test 3</div>
      </FlexContainer>
    </>
  );
};

export default App;
