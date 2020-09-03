import * as React from 'react';
import TwitterLogo from '../../assets/images/icons/logo_tw.png';
import FacebookLogo from '../../assets/images/icons/logo_fb.png';

const ListSignin = () => (
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  <ul className="l-social-signin">
    <li className="c-social-signin-btn c-social-signin-btn--twitter" key={1}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          window.location.href = `${process.env.DOMAIN_API_AUTH}/auth/twitter`;
        }}
        className="c-social-signin-btn__content"
      >
        <img src={TwitterLogo} alt="Sign in with Twitter" />
        <span>Sign in with Twitter</span>
      </div>
    </li>
    <li className="c-social-signin-btn c-social-signin-btn--facebook" key={2}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          window.location.href = `${process.env.DOMAIN_API_AUTH}/auth/twitter`;
        }}
        className="c-social-signin-btn__content"
      >
        <img src={FacebookLogo} alt="Sign in with Facebook" />
        <span>Sign in with Facebook</span>
      </div>
    </li>
  </ul>
);
/* eslint-enable jsx-a11y/click-events-have-key-events */

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
