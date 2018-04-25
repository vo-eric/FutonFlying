import React from 'react';
import BookingsDetail from './bookings_detail';

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.renderBookings = this.renderBookings.bind(this);
    this.renderHostings = this.renderHostings.bind(this);
  }

  componentWillMount() {
    this.props.fetchBookings(this.props.currentUser.id);
  }

  renderBookings() {
    let bookings;
    if (this.props.bookings.length) {
      bookings = (
        <section className='bookings-index'>
          {Object.values(this.props.bookings[0]).map((booking) => (
            [
              <div key={booking.id}>
                <img src={booking.avatar} alt="" />
                {booking.fname} {booking.lname}
                {booking.start_date} - {booking.end_date}
              </div>,
              <hr style={{ backgroundColor: 'black' }} />
            ]
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
    return bookings;
  }

  renderHostings() {
    let hostings;
    if (this.props.bookings.length) {
      hostings = (
        <section className='hostings-index'>
          {Object.values(this.props.bookings[1]).map((hosting) => (
            [
              <div key={hosting.id}>
                <img src={hosting.avatar} alt="" />
                {hosting.fname} {hosting.lname}
                {hosting.start_date} - {hosting.end_date}
              </div>,
              <hr style={{ backgroundColor: 'black' }} />
            ]
          )
          )}
        </section>
      );
    } else {
      hostings = (
        <div className='hostings-index'>
          You aren't hosting anyone!
        </div>
      );
    }
    return hostings;
  }

  render() {
    if (this.props.formType === "bookings") {
      return (
        <div>{this.renderBookings()}</div>
      );
    } else if (this.props.formType === "hostings") {
      return (
        <div>{this.renderHostings()}</div>
      );
    }
  }

  // render() {
  //   return (
  //     <div>I'm an Idiot</div>
  //   );
  // }
}

export default Bookings;
