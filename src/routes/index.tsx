import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from '../pages/Search';
import Details from '../pages/Details';

const Routes: React.FC = () => (

  <Switch>
    <Route path="/" component={Search} exact />
    <Route path="/details" component={Details} />
  </Switch>

);

export default Routes;
