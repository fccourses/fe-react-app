import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CounterPage from './pages/Counter';
import LoaderPage from './pages/Loader';
import TrackerPage from './pages/Tracker';
// import WindowSizes from './components/WindowSizes';
// import UsersLoader from './components/UsersLoader';
// import ImageWrapper from './components/ImageWrapper';
// import UserCard from './components/UserList/UserCard';
// import Aloha from './components/AlohaDashboard/Aloha';
// import Calendar from './components/Calendar';
// import Carousel from './components/Carousel';

const App = props => {
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
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/counter' component={CounterPage} />
        <Route path="/loader" component={LoaderPage} />
        <Route path="/tracker" component={TrackerPage} />
        <Route path="*" component={NotFound} />
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

const NotFound = () => <div>ERROR 404: PAGE NOT FOUND</div>

export default App;
