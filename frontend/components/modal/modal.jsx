import React from 'react';
import ReactDOM from 'react-dom';
import SessionFormContainer from '../session_form/session_form_container';
import ModalContainer from './modal_container';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;
    this.props.closeModal();
  }

  // onClick={() => this.props.closeModal()}

  render () {
    if (this.props.modalIsOpen) {
      return (
        <div className='outside-modal'>
          <div className="auth-modal">
            <button
              className="close-modal"
              onClick={this.handleClick}
              >
              X</button>
            <span className="session-modal"><SessionFormContainer /></span>
          </div>
      </div>
      );
    } else {
      return (
        <div className="modal-not-active"></div>
      );
    }
  }
}

export default Modal;
