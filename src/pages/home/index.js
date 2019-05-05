import React from 'react';
import Tabs from '../../common/tabs';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movie from './movie';
import Cinema from './cinema';
import Center from './center'

class Home extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      tabs: [
        { id: 'movie', name:'电影', icon: 'iconfont icon-dianying' },
        { id: 'cinema', name:'影院', icon: 'iconfont icon-huaban' },
        { id: 'center', name:'我的', icon: 'iconfont icon-wode' }
      ]
    }
  }
  render () {
    return (
      <div>
        <Switch>
          <Route path="/movie" component={ Movie }></Route>
          <Route path="/cinema" component={ Cinema }></Route>
          <Route path="/center" component={ Center }></Route>
          <Redirect to="/movie"></Redirect>
        </Switch>
        <Tabs tabs={ this.state.tabs }></Tabs>
      </div>
    )
  }
}

export default Home;
