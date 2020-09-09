import * as React from 'react';
import {Route, Redirect} from 'react-router';

import SignIn from '../components/Signin/Signin';

interface AuthProps {
  isAuthorised: boolean;
}

const Auth: React.FC<AuthProps> = ({isAuthorised = false, children}) => (
  <div>
    {isAuthorised ? (
      children
    ) : (
      <div>
        <Route path="/" component={SignIn} />
        <Redirect to="/" />
      </div>
    )}
  </div>
);

export default Auth;
