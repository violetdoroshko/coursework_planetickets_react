import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import './index.css';
import Aviasales from './containers/Aviasales';
import Register from './components/Register';
import Login from './components/Login';
import TicketCard from './components/TicketCard';

//todo: fix /#/
const Main = () => (
  <HashRouter basename="/">
    <Switch>
      <Route path="/" exact component={Aviasales} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/4" exact component={TicketCard} />
    </Switch>
  </HashRouter>
);

const domContainer = document.getElementById('root');
ReactDOM.render(<Main />, domContainer);
