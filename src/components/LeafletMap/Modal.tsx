import * as React from 'react';

import {Tweet} from '../../services/socket/models';

export interface MolalProps {
  tweets?: Tweet[];
  postTweet?: (message: string, geolocation: L.LatLngTuple) => void;
  geolocation: L.LatLngTuple;
}

const Modal: React.FC<MolalProps> = ({tweets = [], postTweet = () => {}, geolocation}) => {
  const handleSubmit = () => {
    const message: HTMLInputElement = document.getElementById('message') as HTMLInputElement;
    postTweet(message.value, geolocation);
    message.value = '';
    return false;
  };

  return (
    <div
      className="l-modal"
      role="dialog"
      data-modal="modal_socket"
      aria-modal="true"
      // aria-hidden="true"
      aria-hidden="false"
    >
      <div className="l-modal__inner">
        <div className="l-modal__inner__content" data-modal-wrapper="modal_socket">
          <div className="c-modal" role="document">
            <div className="c-modal__content">
              <form>
                <ul>
                  <li>
                    <textarea id="message" placeholder="message" />
                  </li>
                </ul>
              </form>
              {geolocation && tweets ? (
                <ul>
                  {tweets.map(t => (
                    <li key={t.tweetId}>
                      <span>{t.userName}</span> : {t.message} (
                      {t.postedAt.replace('T', ' ').replace('.000Z', '')})
                    </li>
                  ))}
                </ul>
              ) : (
                'No tweets'
              )}
            </div>
            <div className="c-modal__select">
              <div
                role="button"
                className="c-modal__select__btn"
                data-modal-jump="modal_socket"
                onClick={handleSubmit}
                onKeyDown={handleSubmit}
                tabIndex={0}
              >
                <span>Post</span>
              </div>
              <div
                role="button"
                className="c-modal__select__btn c-modal__select__btn--close"
                data-modal-close="modal_socket"
                tabIndex={0}
              >
                <span>Close</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
