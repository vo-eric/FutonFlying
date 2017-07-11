import React from 'react';
import BookingsDetail from './bookings_detail';

class Bookings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  handleSubmit(e) {
    e.preventDefault();
    //going to 'submit' the booking and close.
  }

  render () {
    let bookings;
    if (this.props.bookings.length > 0) {
      bookings = (
        <section className='bookings-index'>
          {this.props.bookings.map((booking) => (
            <BookingDetail
              key={booking.id}
              booking={booking}
            />
          )
        )}
        </section>
      );
    } else {
      bookings = (
        <div className='bookings-index'>
          You don't have any bookings
        </div>
      );
    }

    return (
      <div>
        { bookings }
      </div>
    );

  }
}

export default Bookings;
