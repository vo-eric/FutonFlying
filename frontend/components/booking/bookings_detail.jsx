import React from 'react';

class BookingsDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCancelClick() {

  }

  render() {
    return (
      <section className='booking'>
        <div className='city-name'>
          {this.props.booking.city}
        </div>
        <div className='booking-info'>
          <div className='host-name'>
            {this.props.booking.fname} {this.props.booking.lname}
          </div>
          <div classNamee='trip-details'>
            {this.props.booking.check_in_date} TO
            {this.props.booking.check_out_date}
          </div>
          <div>
            HERES SOME FILLER TEST TEXT
          </div>
        </div>
      </section>
    )
  }
}

export default BookingsDetail;
