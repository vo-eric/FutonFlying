import React from 'react';
import ReactDOM from 'react-dom';
import SessionFormContainer from '../session_form/session_form_container';
import ModalContainer from './modal_container';

class Modal extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (this.props.modalIsOpen) {
      return (
        <div
          className='modal-background'
          onClick={this.handleClick}
        >
          <div
            className="modal"
            onClick={this.stopPropagation}
          >

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
