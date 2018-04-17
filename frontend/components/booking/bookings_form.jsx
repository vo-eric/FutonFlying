import React from 'react';
import { clearErrors } from '../../actions/error_actions';

class BookingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInfo: {
        hostId: this.props.host.id,
        startDate: null,
        endDate: null,
        numGuests: 1
      }
    };
    this.closeDropdown = this.closeDropdown.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   this.setState(newProps.booking);
  // }

  closeDropdown() {
    this.props.closeDropdown();
  }

  update(e, property) {
    const {formInfo} = this.state;
    formInfo[property] = e.currentTarget.value;
    this.setState({
      formInfo
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let booking = this.state.formInfo;
    this.props.createBooking(booking);
  }

  renderErrors() {
    const {errors} = this.props;
    if (errors.length){
      debugger
      return (
        <p>{errors}</p>
      );
    } else {
      return null;
    }
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
              <input
                className='booking-request-input'
                type='date'
                onChange={(e) => this.update(e, "startDate")} />
            </div>

            <div className='booking-request-dates'>
              <span>Departure Date</span>
              <input
                className='booking-request-input'
                type='date'
                min={this.state.formInfo.startDate}
                onChange={(e) => this.update(e, "endDate")} />
            </div>
          </div>
          <span>
            {this.renderErrors()}
          </span>

          <div className='booking-request-message'>
            <span>Message</span>
            <textarea
              type='text'
              placeholder={`Say Hi to ${this.props.host.fname}!`}>
            </textarea>
          </div>
        </form>

        <div className='booking-actions'>
          <button
            className='booking-dropdown-button'
            onClick={() => this.closeDropdown()}>
            Cancel
          </button>

          <button
            onClick={this.handleSubmit}
            className='booking-dropdown-button'>
            Send
            </button>
        </div>
      </div>
    );

  }
}

export default BookingsForm;
