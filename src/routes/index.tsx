import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Logup from '../pages/Logup';
import Dashboard from '../pages/Dashboard';
import Students from '../pages/Students';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/logup" component={Logup} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/students" component={Students} isPrivate />
  </Switch>
);

export default Routes;
