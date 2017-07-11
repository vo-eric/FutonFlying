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
    this.props.closeModal();
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  render () {
    if (this.props.modalIsOpen) {
      return (
        <div
          className='outside-modal'
          onClick={this.handleClick}
        >
          <div
            className="gen-modal"
            onClick={this.stopPropagation}
          >
            <button
              className="close-modal"
              onClick={this.handleClick}
              >
              X</button>
            <SessionFormContainer />
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
