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
        <section className='bookings-list'>
          {Object.values(this.props.bookings[0]).map((booking) => (
            [
              <div className="booking" key={booking.id}>
                <div className="booking__user">
                  <img className="booking__image" src={booking.avatar} alt={booking.fname} />
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
              </div>,
              <hr className="booking__hr" />
            ]
          )
          )}
        </section>
      );
    } else {
      bookings = (
        <div className='bookings-list'>
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
        <section className='hostings-list'>
          {Object.values(this.props.bookings[1]).map((hosting) => (
            [
              <div className="hosting" key={hosting.id}>
                <div className="hosting__user">
                  <img className="hosting__image" src={hosting.avatar} alt="{hosting.fname" />
                  <div className="hosting__full-name">
                    {hosting.fname} {hosting.lname}
                  </div> 
                </div>

                <div className="booking__start-date">
                  <p>Arriving At</p>
                  <hr />
                  {hosting.start_date}
                </div>
                <div className="booking__end-date">
                  <p>Leaving At</p>
                  <hr />
                  {hosting.end_date}
                </div>
              </div>,
              <hr className="hosting__hr" />
            ]
          )
          )}
        </section>
      );
    } else {
      hostings = (
        <div className='hostings-list'>
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
