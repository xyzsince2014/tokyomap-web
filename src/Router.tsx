import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router';

// import pages from './pages';

import SignIn from './components/Auth/SignIn';
import Auth from './containers/Auth/Auth';
import LeafletMap from './components/LeafletMap/LeafletMap';

const Router: React.FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/auth" component={SignIn} />
      {/* <Redirect to="/auth/signin" /> */}
      <Auth>
        <Switch>
          <Route path="/" component={LeafletMap} />
          {/* <Route path="/auth/signout" component={SingOut}/> */}
          {/* <Redirect to="/" /> */}
        </Switch>
      </Auth>
    </Switch>
  </BrowserRouter>
);

export default Router;
