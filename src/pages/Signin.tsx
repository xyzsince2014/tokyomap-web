import * as React from 'react';
import Particles, {IParticlesParams} from 'react-particles-js';

import ListSignin from '../components/Signin/ListSignin';
import Clock from '../containers/Clock/Clock';

/* eslint-disable @typescript-eslint/camelcase */
const particleConfig: IParticlesParams = {
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      resize: true,
    },
  },
};
/* eslint-enable @typescript-eslint/camelcase */

const SignIn: React.FC = () => (
  <div className="l-partition">
    <div className="l-partition__main">
      <Particles params={particleConfig} />
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
