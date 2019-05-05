import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class Base extends React.PureComponent {
  render () {
    return (
      <Switch>
        <Route path="/shows/:movieId" component={ Detail }></Route>
        <Route path="/" component={ Home }></Route>
      </Switch>
    )
  }
}

export default Base
