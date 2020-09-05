import * as React from 'react';

import ListSignin from '../components/Signin/ListSignin';
import Clock from '../containers/Clock/Clock';

const SignIn: React.FC = () => (
  <div className="l-partition">
    <div className="l-partition__main">
      <div className="l-partition__main__content">
        <ListSignin />
      </div>
      <footer className="l-partition__footer">
        <Clock />
      </footer>
    </div>
  </div>
);

export default SignIn;
