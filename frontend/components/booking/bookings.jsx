import React from 'react';
import BookingsShowContainer from './bookings_show_container';
import { Link } from 'react-router-dom';

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.renderBookingsTemplate = this.renderBookingsTemplate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchBookings(this.props.currentUser.id);
  }

  handleClick() {
    return ( 
      <div>
        <BookingsShowContainer />;
      </div>
    );
  }

  renderBookingsTemplate(booking) {
    let bookings;
      return ([
        <div className="booking__user">
          <img 
            className="booking__image" 
            src={booking.avatar} 
            alt={booking.fname} />
          <p className="booking__name">
            {booking.fname} {booking.lname}
          </p>
        </div>,
  
        <div className="booking__date">
          <p>Arriving At</p>
          <hr />
          {booking.start_date} 
        </div>,

        <div className="booking__date">
          <p>Leaving At</p>
          <hr />
          {booking.end_date}
        </div>
    ]);
  }

  render() {
    if (this.props.formType === "bookings") {
      let bookings;
        if (this.props.bookings.length) {
          bookings = (
            <section className="bookings-list">
              {Object.values(this.props.bookings[0]).map((booking) => {
                  return ([
                    <div 
                      className="booking"
                      onClick={() => this.handleClick()}>
                      {this.renderBookingsTemplate(booking)}
                    </div>,
                    <hr className="booking__hr" />
                  ]);
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
          <section className="bookings-list">
            {Object.values(this.props.bookings[1]).map((hosting) => {
              return (
                [
                <div className="booking">
                  {this.renderBookingsTemplate(hosting)}
                </div>,
                <hr className="booking__hr" />
              ]);
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