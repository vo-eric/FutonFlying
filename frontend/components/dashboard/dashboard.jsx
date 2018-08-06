import React from 'react';
import { Link } from 'react-router-dom';
import BookingsContainer from '../booking/bookings_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.showTrips = this.showTrips.bind(this);
    this.showGuests = this.showGuests.bind(this);
  }

  showTrips() {
    return <BookingsContainer formType="bookings"/>;
  }

  showGuests() {
    return <BookingsContainer formType="hostings"/>;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user) {
      this.props.history.push('/');
    }
  }

  render () {
    let user = this.props.user;
    return(
      <div className='dashboard'>
        <div className='dashboard-user'>
          <img 
            src={user.avatar_url} 
            className="user-module__photo" />
          <p className='user-module__name'>
            {user.fname} {user.lname}
          </p>
          <p className="user-module__location">
            {user.city}, {user.country}
          </p>
        </div>

        <div className='dashboard-main'>
          <div className='search-module'>
            <p className='teaser-text'>
              Explore The World
            </p>


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
              {this.showTrips()}
            </div>
          </div>

          <div className='upcoming-guests'>
            <div className='dash-text'>
                My Upcoming Guests
            </div>

            <div className='inside-text'>
              {this.showGuests()}
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Dashboard;
