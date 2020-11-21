import * as React from 'react';
import TwitterLogo from '../../assets/images/icons/logo_tw.png';
import FacebookLogo from '../../assets/images/icons/logo_fb.png';
import LineLogo from '../../assets/images/icons/logo_line.png';
import TelegramLogo from '../../assets/images/icons/logo_telegram.png';

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
          window.location.href = `${process.env.DOMAIN_API_AUTH}/auth/facebook`;
        }}
        className="c-social-signin-btn__content"
      >
        <img src={FacebookLogo} alt="Sign in with Facebook" />
        <span>Sign in with Facebook</span>
      </div>
    </li>
    <li className="c-social-signin-btn c-social-signin-btn--line" key={3}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          window.location.href = `${process.env.DOMAIN_API_AUTH}/auth/line`;
        }}
        className="c-social-signin-btn__content"
      >
        <img src={LineLogo} alt="Sign in with Line" />
        <span>Sign in with Line</span>
      </div>
    </li>
    <li className="c-social-signin-btn c-social-signin-btn--telegram" key={4}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          window.alert('Not available yet.');
          // window.location.href = `${process.env.DOMAIN_API_AUTH}/auth/telegram`;
        }}
        className="c-social-signin-btn__content"
      >
        <img src={TelegramLogo} alt="Sign in with Telegram" />
        <span>Sign in with Telegram</span>
      </div>
    </li>
  </ul>
);
/* eslint-enable jsx-a11y/click-events-have-key-events */

export default ListSignin;
