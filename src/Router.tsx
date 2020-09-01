import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router';

// import pages from './pages';

import Auth from './containers/Auth/Auth';
import LeafletMap from './components/LeafletMap/LeafletMap';

const Router: React.FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Auth>
        <Route path="/" component={LeafletMap} />
        <Redirect to="/" />
      </Auth>
    </Switch>
  </BrowserRouter>
);

export default Router;
