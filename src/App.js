import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import WindowSizes from './components/WindowSizes';
// import UsersLoader from './components/UsersLoader';
// import ImageWrapper from './components/ImageWrapper';
// import UserCard from './components/UserList/UserCard';
// import Aloha from './components/AlohaDashboard/Aloha';
// import Calendar from './components/Calendar';
// import Carousel from './components/Carousel';

const App = props => {
  console.log(props);
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contacts' component={Contacts} />
      </Switch>
    </BrowserRouter>
  );
};

const Home = () => <div>HOME</div>;
const About = props => {
  console.log(props);

  setTimeout(() => {
    props.history.push('/');
  }, 5000);

  return <div>About</div>;
};
const Contacts = () => <div>Contacts</div>;

export default App;
