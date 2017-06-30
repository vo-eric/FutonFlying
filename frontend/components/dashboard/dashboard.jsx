import React from 'react';
import { Link } from 'react-router-dom';
import BookingsContainer from '../booking/bookings_container';

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

  render () {
    return(
      <div className='dashboard'>

        <div className='dash-user'>
          <div className='dash-user-info'>
            <div className='dash-fname'>
              {this.props.user.fname} {this.props.user.lname}
            </div>
          </div>
        </div>

        <div className='trips'>

          <div className='search-all'>
            <div className='where-text'>
              Where do you want to go?
            </div>

            <div className='inside-text'>
              There will be a search bar here
            </div>
          </div>

          <div className='random-locations'>
            <div className='dash-text'>
              <i className="fa fa-globe icons" aria-hidden="true"></i>
              THE WORLD'S FUTONS ARE AT YOUR FINGERTIPS
            </div>

            <div className='inside-text'>
              There will be three locations here(hopefully they'll be randomized)
            </div>
          </div>

          <div className='travel'>
            <div className='dash-text'>
              <i className="fa fa-plane icons" aria-hidden="true"></i>
              MY TRAVEL PLANS
            </div>

            <div className='inside-text'>
              <BookingsContainer />
            </div>
          </div>

          <div className='upcoming-guests'>
            <div className='dash-text'>
              <i className="fa fa-home icons" aria-hidden="true"></i>
                MY UPCOMING GUESTS
            </div>

            <div className='inside-text'>
              This entire text portion is a placeholder
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Dashboard;
