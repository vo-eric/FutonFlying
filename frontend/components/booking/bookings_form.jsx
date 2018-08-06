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
    this.props.createBooking(booking).then(() => {
      if (!this.state.errors) {
        this.props.history.push('/');
      }
    });
  }

  renderErrors() {
    const {errors} = this.props;
    if (errors.length){
      return (
        <p className="booking-errors">
          {errors.map(error => <p>{error}</p> )}
        </p>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className='booking-form'>
        <p className='booking-form-header'>
          Request to stay
        </p>

        <form onSubmit={this.handleSubmit}>
          <section className='booking-form__dates'>
            <div className='booking-form__date'>
              <span>Arrival Date</span>
              <input
                className='booking-form__date-input'
                type='date'
                onChange={(e) => this.update(e, "startDate")} />
            </div>

            <div className='booking-form__date'>
              <span>Departure Date</span>
              <input
                className='booking-form__date-input'
                type='date'
                min={this.state.formInfo.startDate}
                onChange={(e) => this.update(e, "endDate")} />
            </div>
          </section>
          <span>
            {this.renderErrors()}
          </span>

          <div className='booking-form__message'>
            <span>Message</span>
            <textarea
              type='text'
              placeholder={`Say Hi to ${this.props.host.fname}!`}>
            </textarea>
          </div>
        </form>

        <div className='booking-form__buttons'>
          <button
            className='booking-form-button'
            onClick={() => this.closeDropdown()}>
            Cancel
          </button>

          <button
            onClick={this.handleSubmit}
            className='booking-form-button'>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default BookingsForm;
