import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignInForm from './components/forms/SignInForm';
import SignInPage from './pages/SignIn';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/sign-up' component={} /> */}
        <Route path='/' component={SignInPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
