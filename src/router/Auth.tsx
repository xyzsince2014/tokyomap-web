import * as React from 'react';
import {Route, Redirect} from 'react-router';

import SignIn from '../components/Signin/Signin';

interface AuthProps {
  isAuthenticated: boolean;
}

const Auth: React.FC<AuthProps> = ({isAuthenticated = false, children}) => (
  <div>
    {isAuthenticated ? (
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
