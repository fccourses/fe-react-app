import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeContext } from './contexts';
import CONSTANTS from './constants';

const { THEMES } = CONSTANTS;

const App = props => {
  const themeState = useState(THEMES.LIGHT);

  /*>> ThemeSwitcher <<*/

  return (
    <ThemeContext.Provider value={themeState}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
