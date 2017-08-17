import React from 'react';
import { DateRangePicker } from 'react-dates';
// import css from 'react-dates/lib/css/_datepicker.css';
import { clearErrors } from '../../actions/error_actions';
// import { START_DATE, END_DATE } from 'react-dates/constants';

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
        <div className='booking-request-text'>
          Request to stay
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='booking-dates'>
            <DateRangePicker
              startDate={this.props.startDate}
              endDate={this.props.endDate}
              focusedInput={this.props.focused}
              onDatesChange={({startDate, endDate}) => { this.setState({ startDate, endDate }); }}
              onFocusChange={( focused ) => { this.setState({ focused }); }}
            />
          </div>
        </form>

        <div className='booking-travelers'>
        </div>

        <div className='booking-message'>
        </div>

        <div className='booking-actions'>
          <button
            className="booking-cancel-button"
            onClick={() => this.closeDropdown()}
          >
            Cancel
          </button>
          <button
            className="booking-request-button"
          >
            Send
          </button>
        </div>
      </div>
    );

  }
}

export default BookingsForm
