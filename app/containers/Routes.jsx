import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PlantSearch from './plants/plant-search-container';
import Login from './login/login-container';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/plants/:term?" component={PlantSearch} />
    <Route path="*" component={Login} />
  </Switch>
);

export default Routes;
