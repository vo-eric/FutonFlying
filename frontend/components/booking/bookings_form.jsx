import React from 'react';
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

  render() {
    return (
      <div className='booking-dropdown'>
        <div className='booking-request-text'>
          Request to stay
        </div>
        <div className='booking-dates'>
          <div className='booking-arrival'>
            THIS IS WHENI ARRIVE
          </div>

          <div className='booking-departure'>
            THIS IS WHEN I DEPART
          </div>
        </div>

        <div className='booking-travelers'>
          THIS IS HOW MANY PEOPLE ARE COMING WITH ME
        </div>

        <div className='booking-message'>
          THIS IS A MESSAGE TO YOU
        </div>

        <div className='booking-actions'>
          THIS IS WHERE I SEND YOU A HELLO
        </div>
      </div>
    );

  }
}

export default BookingsForm
