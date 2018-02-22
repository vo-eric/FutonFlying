import React from 'react';
import { Link } from 'react-router-dom';
// import BookingsContainer from '../booking/bookings_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  showTrips() {
    // <BookingsContainer />
    //if trips > 0, show the upcoming trips
    //else "You don't have any upcoming trips"
  }

  showGuests() {
    //if guests > 0, show all upcoming guests
    //else "You don't have any upcoming guests"
  }

  //Where are you going's search bar is going to to navigate to the city page

  //random locations is going to include a search bar that goes to the index page of hosts given the city
  //not so sure about this.
  //if time permits, have different groups of cities with their individual 'flairs'

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user) {
      this.props.history.push('/');
    }
  }

  render () {
    console.log(this.props.user);
    return(
      <div className='dashboard'>

        <div className='dash-user'>
          <div className='dash-user-info'>
            <div className='user-image'>
              <img
                src={window.images.ctvo}
                className='user-photo'
              />
            </div>
            <div className='dash-name'>
              {this.props.user.fname} {this.props.user.lname}
            </div>
          </div>
        </div>

        <div className='trips'>

          <div className='teaser'>
            <div className='teaser-text'>
              Explore Europe
            </div>

            <div className='city-images'>
              <div className="city-image">
                <img src={window.images.vienna} />
              </div>

              <div className="city-image">
                <img src={window.images.berlin} />
              </div>

              <div className="city-image">
                <img src={window.images.porto} />
              </div>
            </div>
              <Link
                className="browse-all-text"
                to={'/hosts'}>
                Browse all Hosts
              </Link>
          </div>

          <div className='travel'>
            <div className='dash-text'>
              My Travel Plans
            </div>

            <div className='inside-text'>
              
            </div>
          </div>

          <div className='upcoming-guests'>
            <div className='dash-text'>
                My Upcoming Guests
            </div>

            <div className='inside-text'>
              You don't have any upcoming guests
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Dashboard;
