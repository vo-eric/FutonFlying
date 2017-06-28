import React from 'react';
import BookingContainer from './booking_container';
import ModalContainer from '../modal/modal_container';

class Booking extends React.Component {
  constructor(props) {
    super(props);
  }

  clearErrorsOpenModal(component) {
    this.props.clearErrors();
    this.props.openModal(component);
  }

  handleSubmit(e) {
    e.preventDefault();
    //going to 'submit' the booking and close.
  }
}
