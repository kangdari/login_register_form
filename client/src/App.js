import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage/Landingpage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';

import Auth from './hoc/auth';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path='/' component={Auth(LandingPage, null)} exact />
        <Route path='/login' component={Auth(LoginPage, false)} exact />
        <Route path='/register' component={Auth(RegisterPage, false)} exact />
      </Switch>
    </>
  );
}

export default App;
