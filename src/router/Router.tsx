import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router';

import LeafletMap from '../containers/LeafletMap/LeafletMap';

const Router: React.FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LeafletMap} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
