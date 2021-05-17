import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Aviasales from './containers/Aviasales';
import Login from './components/Login';
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
    </Switch>
  </BrowserRouter>
);

const domContainer = document.getElementById('root');
ReactDOM.render(<Main />, domContainer);
