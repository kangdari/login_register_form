import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage/Landingpage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/register' component={RegisterPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
