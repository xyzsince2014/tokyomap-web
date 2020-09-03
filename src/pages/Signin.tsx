import * as React from 'react';

import ListSignin from '../components/Auth/ListSignin';

const SignIn: React.FC = () => (
  <div className="l-partition">
    <div className="l-partition__main">
      <div className="l-wrapper">
        <ListSignin />
      </div>
    </div>
  </div>
);

export default SignIn;
