import React from 'react';
import { clearErrors } from '../../actions/error_actions';

class BookingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.bookingInfo;
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.booking);
  }

  closeDropdown() {
    this.props.closeDropdown();
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className='booking-dropdown'>
        <div className='booking-request-header'>
          Request to stay
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='booking-dates'>
            <div className='booking-request-dates'>
              <span>Arrival Date</span>
              <input className='booking-request-input' type='date' />
            </div>

            <div className='booking-request-dates'>
              <span>Departure Date</span>
              <input className='booking-request-input' type='date' />
            </div>
          </div>

          <div className='booking-request-message'>
            <span>Message</span>
            <textarea
              type='text'
              placeholder='Say Hi!'>
            </textarea>
          </div>
        </form>

        <div className='booking-actions'>
          <button
            className='booking-dropdown-button'
            onClick={() => this.closeDropdown()}>
            Cancel
          </button>

          <button className='booking-dropdown-button'>
            Send
          </button>
        </div>
      </div>
    );

  }
}

export default BookingsForm;
