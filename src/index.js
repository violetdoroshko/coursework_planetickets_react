import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Aviasales from './containers/Aviasales';
import LogSignInfo from './components/LogSignInfo';
import LogPersonalInfo from './components/LogPersonalInfo';
import Sign from './components/Sign';
import TicketCard from './components/TicketCard';

//todo: fix /#/
const Main = () => (
  <HashRouter basename="/">
    <Switch>
      <Route path="/" exact component={Aviasales} />
      <Route path="/1" exact component={LogSignInfo} />
      <Route path="/2" exact component={LogPersonalInfo} />
      <Route path="/3" exact component={Sign} />
      <Route path="/4" exact component={TicketCard} />
    </Switch>
  </HashRouter>
);

const domContainer = document.getElementById('root');
ReactDOM.render(<Main />, domContainer);
