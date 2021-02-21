import * as React from 'react';

import TwitterLogo from '../../assets/images/icons/logo_tw.png';
import FacebookLogo from '../../assets/images/icons/logo_fb.png';
import LineLogo from '../../assets/images/icons/logo_line.png';

const Modal: React.FC = () => (
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  <div
    className="l-modal"
    role="dialog"
    data-modal="modal_auth"
    aria-modal="true"
    aria-hidden="true"
  >
    <div className="l-modal__inner">
      <div className="l-modal__inner__content" data-modal-wrapper="modal_auth">
        <div className="c-modal" role="document">
          <div className="c-modal__content">
            <ul className="l-social-signin">
              <li className="c-social-signin-btn c-social-signin-btn--twitter" key={1}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    window.location.href = `${process.env.DOMAIN_API}/auth/twitter`;
                  }}
                  className="c-social-signin-btn__content"
                >
                  <img src={TwitterLogo} alt="Sign In with Twitter" />
                  <span>Sign In with Twitter</span>
                </div>
              </li>
              <li className="c-social-signin-btn c-social-signin-btn--facebook" key={2}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    window.location.href = `${process.env.DOMAIN_API}/auth/facebook`;
                  }}
                  className="c-social-signin-btn__content"
                >
                  <img src={FacebookLogo} alt="Sign In with Facebook" />
                  <span>Sign In with Facebook</span>
                </div>
              </li>
              <li className="c-social-signin-btn c-social-signin-btn--line" key={3}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    window.location.href = `${process.env.DOMAIN_API}/auth/line`;
                  }}
                  className="c-social-signin-btn__content"
                >
                  <img src={LineLogo} alt="Sign In with Line" />
                  <span>Sign In with Line</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="c-modal__select">
            <div
              role="button"
              className="c-modal__select__btn c-modal__select__btn--close"
              data-modal-close="modal_auth"
              tabIndex={0}
            >
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  /* eslint-enable jsx-a11y/click-events-have-key-events */
);

export default Modal;
