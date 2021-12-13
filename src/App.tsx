import React from 'react';
import {
  withRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { connectAlita } from 'redux-alita';
import routes from '@/routes';
import AllComponents from '@/pages';

const App = () => (
    <div className="App" >
    <div id="microApp" />
      <Switch>
      {
        // 菜单
      [...routes.Menus, ...routes.gameMenus].map((menu) => {
        const Component = AllComponents[menu.component];
        return <Route key={menu.name} path={menu.path} render={() => <Component />} />;
      })
      }
    <Redirect from="/" to="/home" exact />
</Switch>
</div>
);
export default withRouter(connectAlita(['mc_consts'])(App));
