import React from 'react';
import { Switch, Route } from 'react-router-dom';

const routes = [
  { path: '/people', component: People },
  { path: '/films', component: Films },
  { path: '/starships', component: Starships },
  { path: '/vehicles', component: Vehicles },
  { path: '/species', component: Species },
  { path: '/planets', component: Planets },
];

const WithRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

const Routes = (props) => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <WithRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
