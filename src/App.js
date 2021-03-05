import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { ThemeContext } from './contexts';
import CONSTANTS from './constants';
import Chat from 'components/Chat';

const { THEMES } = CONSTANTS;

const App = props => {
  const themeState = useState(THEMES.LIGHT);
  return (
    <ThemeContext.Provider value={themeState}>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/sign-in'>Sign-in</Link>
            </li>
            <li>
              <Link to='/sign-up'>Sign-up</Link>
            </li>
            <li>
              <Link to='/chat'>Chat</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
