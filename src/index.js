import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Aviasales from './containers/Aviasales';
import register from './components/Register';
import Login from './components/Login';
import TicketCard from './components/TicketCard';
import { TICKETS_URL } from './utils/consts';

const Main = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/" exact component={Aviasales} />
      <Route path="/register" exact component={register} />
      <Route path="/login" exact component={Login} />
      <Route path="/4" exact component={TicketCard} />
      <Redirect from="/search" to={TICKETS_URL} />
    </Switch>
  </BrowserRouter>
);

const domContainer = document.getElementById('root');
ReactDOM.render(<Main />, domContainer);
