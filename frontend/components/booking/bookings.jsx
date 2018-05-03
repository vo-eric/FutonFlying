import React from 'react';
import BookingsShow from './bookings_show';
import { Link } from 'react-router-dom';

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.renderBookingsTemplate = this.renderBookingsTemplate.bind(this);
  }

  componentWillMount() {
    this.props.fetchBookings(this.props.currentUser.id);
  }

  renderBookingsTemplate(booking) {
    let bookings;
      return ([
        <a
          className="booking" 
          href={`/#/bookings/${booking.id}`}
          >
          <div className="booking__user">
            <img 
              className="booking__image" 
              src={booking.avatar} 
              alt={booking.fname} />
            <p className="booking__full-name">
              {booking.fname} {booking.lname}
            </p>
          </div>
          
          <div className="booking__start-date">
            <p>Arriving At</p>
            <hr />
            {booking.start_date} 
          </div>
          <div className="booking__end-date">
            <p>Leaving At</p>
            <hr />
            {booking.end_date}
          </div>
        </a>,
        <hr className="booking__hr" />
      ]);
    }

  render() {
    if (this.props.formType === "bookings") {
      let bookings;
        if (this.props.bookings.length) {
          bookings = (
            <section className="bookings-list">
              {Object.values(this.props.bookings[0]).map((booking) => {
                  return this.renderBookingsTemplate(booking);
                }
             )}
            </section>
          );
        } else {
          bookings = (
            <div className="bookings-list">
              You don't have any bookings
            </div>
          );
        }
      return bookings;
    } else if (this.props.formType === "hostings") {
      let hostings;
      if (this.props.bookings.length) {
        hostings = (
          <section className="hostings-list">
            {Object.values(this.props.bookings[1]).map((hosting) => {
              return this.renderBookingsTemplate(hosting);
            }
            )}
          </section>
        );
      } else {
        hostings = (
          <div className="hostings-list">
            You don't have any hostings
            </div>
        );
      }
      return hostings;
    }
  }
}

export default Bookings;