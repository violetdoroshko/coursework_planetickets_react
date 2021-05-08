import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Aviasales from './containers/Aviasales';
import LogSignInfo from './components/LogSignInfo';

//todo: fix /#/
const Main = () => (
  <HashRouter basename="/">
    <Switch>
      <Route path="/" exact component={Aviasales} />
      <Route path="/create" exact component={LogSignInfo} />
    </Switch>
  </HashRouter>
);

const domContainer = document.getElementById('root');
ReactDOM.render(<Main />, domContainer);
