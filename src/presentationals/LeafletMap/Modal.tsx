import * as React from 'react';

export interface MolalProps {
  handlePost: () => void;
}

const Modal: React.FC<MolalProps> = ({handlePost = () => {}}) => (
  <div
    className="l-modal"
    role="dialog"
    data-modal="modal_socket"
    aria-modal="true"
    aria-hidden="true"
  >
    <div className="l-modal__inner">
      <div className="l-modal__inner__content" data-modal-wrapper="modal_socket">
        <div className="c-modal" role="document">
          <div className="c-modal__content">
            {/* todo: validation */}
            <form>
              <ul>
                <li>
                  <textarea id="message" placeholder="message" />
                </li>
              </ul>
            </form>
          </div>
          <div className="c-modal__select">
            <div
              role="button"
              className="c-modal__select__btn"
              data-modal-jump="modal_socket"
              onClick={handlePost}
              onKeyDown={handlePost}
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

export default Modal;
