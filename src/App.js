import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout } from 'antd';
import { Footer, NavBar, Spinner } from './components';
import indexRoutes from './routes';
import dashRoutes from './routes/routes';

const hist = createBrowserHistory();

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router history={hist}>
        <Layout className='layout'>
          <NavBar routes={dashRoutes} />
          <Layout.Content style={{ padding: '0 50px', paddingTop: '50px' }}>
            <div className='site-layout-content'>
              <Switch>
                {indexRoutes.map((prop, key) => (
                  <Route
                    path={prop.path}
                    key={key}
                    component={prop.component}
                    infos={dashRoutes}
                  />
                ))}
              </Switch>
            </div>
          </Layout.Content>
          <Footer />
        </Layout>
      </Router>
    </Suspense>
  );
};

export default App;
