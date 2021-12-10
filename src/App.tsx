import React from 'react';
import {
  withRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { connectAlita, setAlitaState } from 'redux-alita';
import routes from '@/routes';
import Home from '@/pages/Home';

type Props = {
    setAlitaState?: typeof setAlitaState
  }
const App: React.FC<Props> = (props) => (
    <div className="App" >
      <div id="microApp" />
      <iframe src="http://localhost:9000" frameBorder="0" />
      <Switch>
      {
        // 游戏菜单
        routes.gameMenus.map((menu) => <Route key={menu.name} path={menu.path} component={ menu.component} />)

      }
      {
        console.log(props, 999)
      }
      {
        // 普通菜单
        routes.Menus.map((menu) => <Route key={menu.name} path={menu.path} component={ Home} />)
      }
    <Redirect from="/" to="/home" exact />
</Switch>
</div>
);
export default withRouter(connectAlita(['mc_consts'])(App));
