import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { UserContext } from './contexts';

const App = props => {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
  });

  /*>> ThemeSwitcher <<*/

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
