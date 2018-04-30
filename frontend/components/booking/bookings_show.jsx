import React from 'react';

class BookingsShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleBooking(this.props.match.params.id);
  }

  render() {
    let booking = this.props.bookingDetails;
    if (!booking) {
      return null;
    }
    return (
      <section className='booking-main'>
        <div className='booking-main__host-name'>
          {booking.fname} {booking.lname}
        </div>
        <div className='booking-main__trip-length'>
          {booking.start_date} TO
          {booking.end_date}
        </div>
        <div>
          HERES SOME FILLER TEST TEXT
        </div>
      </section>
    );
  }

}

export default BookingsShow;
