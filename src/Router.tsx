import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router';

// import pages from './pages';

import Auth from './components/Auth/Auth';
import LeafletMap from './components/LeafletMap/LeafletMap';

const Router: React.FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LeafletMap} />
      <Route path="/auth" component={Auth} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
