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

  render () {
    if (this.props.modalIsOpen) {
      return (
        <div>
          <span className="close-modal">TEXT</span>
          <span className="session-modal">TEXT</span>
          <button onClick={this.handleClick}>CLOSE</button>
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
