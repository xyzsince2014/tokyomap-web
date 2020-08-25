import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router';

// import pages from './pages';

import Counter from '../../containers/Counter/Counter';
import LeafletMap from '../LeafletMap/LeafletMap';

export interface RouterProps {
  isLoggedIn?: boolean;
}

const Router: React.FC<RouterProps> = ({isLoggedIn = false}) => (
  <div>
    {isLoggedIn ? (
      <Switch>
        <Route exact path="/" component={LeafletMap} />
        <Redirect to="/" />
      </Switch>
    ) : (
      <Counter />
    )}
  </div>
);

export default Router;
