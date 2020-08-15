import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import dashboardRoutes from '../routes';

class Layout extends Component {

  render() {
    return (
      <>
        <Switch>
          {dashboardRoutes.map((prop, key) => {
            if (prop.collapse) {
              return prop.views.map((prop2, key2) => (
                <Route
                  {...this.props}
                  path={prop2.path}
                  component={prop2.component}
                  key={key2}
                />
              ));
            }
            if (prop.redirect) {
              return (
                <Redirect
                  {...this.props}
                  from={prop.path}
                  to={prop.pathTo}
                  key={key}
                />
              );
            }
            return (
              <Route
                {...this.props}
                path={prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
      </>
    );
  }
}

export default Layout;
