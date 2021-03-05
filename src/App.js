import React, { useState, useContext, useReducer } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { MenuOpen } from '@material-ui/icons';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { ThemeContext, AppContext } from './contexts';
import { THEMES, ACTIONS } from './constants';
import Chat from 'components/Chat';
import NavMenu from 'components/NavMenu';
import reducer from './appReducer';

const App = props => {
  const themeState = useState(THEMES.LIGHT);
  const [state, dispatch] = useReducer(reducer, {
    isMenuOpen: false,
  });

  const openMenu = () => dispatch({ type: ACTIONS.MENU_OPEN });
  const closeMenu = () => dispatch({ type: ACTIONS.MENU_CLOSE });

  return (
    <AppContext.Provider value={{ state, openMenu, closeMenu }}>
      <ThemeContext.Provider value={themeState}>
        <BrowserRouter>
          <MenuOpen
            onClick={openMenu}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                openMenu();
              }
            }}
            tabIndex='0'
          />
          <NavMenu />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/chat' component={Chat} />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
