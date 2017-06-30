import React from 'react';
import ModalContainer from '../modal/modal_container';
import { clearErrors } from '../../actions/error_actions';

class BookingsForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.booking);
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  clearErrorsOpenModal(component) {
    this.props.clearErrors();
    this.props.openModal(component);
  }



  render() {
    return (
      <div className='booking-modal'>
        <form onSubmit={this.handleSubmit}>
          <div className='booking-form'>
            <div className='booking-header'>
              REQUEST TO STAY
            </div>
          </div>
        </form>
      </div>
    )
  }

}
