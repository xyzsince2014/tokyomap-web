import * as React from 'react';

import ListSignin from '../components/Signin/ListSignin';
import MainVisual from '../assets/images/main-visual-pc.jpg';

const SignIn: React.FC = () => (
  <div className="l-partition">
    <div className="l-partition__main">
      <img src={MainVisual} alt="Main Visual" className="l-partition__main__background" />
      <div className="l-partition__main__content">
        <div className="l-wrapper">
          <ListSignin />
        </div>
      </div>
    </div>
  </div>
);

export default SignIn;
