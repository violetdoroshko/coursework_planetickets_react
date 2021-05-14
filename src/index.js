import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Aviasales from './containers/Aviasales';
import Login from './components/Login';
import { TICKETS_URL } from './utils/consts';
import Register from './components/Register';
import './index.css';
import Account from './components/Account';

const Main = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/" exact component={Aviasales} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/account" exact component={Account} />
      <Redirect from="/search" to={TICKETS_URL} />
    </Switch>
  </BrowserRouter>
);

const domContainer = document.getElementById('root');
ReactDOM.render(<Main />, domContainer);
