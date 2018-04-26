import React from 'react';
import { Link } from 'react-router-dom';
import BookingsContainer from '../booking/bookings_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.showTrips = this.showTrips.bind(this);
    this.showGuests = this.showGuests.bind(this);
    // this.renderUserPhoto = this.renderUserPhoto.bind(this);
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
    return(
      <div className='dashboard'>

        <div className='dash-user'>
          <div className='dash-user-info'>
            <div className='user-image'>
              <img 
                src={this.props.user.avatar_url} 
                className="user-photo" />
            </div>
            <div className='dash-name'>
              {this.props.user.fname} {this.props.user.lname}
            </div>
            <div className="dash-location">
              {this.props.user.city}, {this.props.user.country}
            </div>
          </div>
        </div>

        <div className='trips'>

          <div className='teaser'>
            <div className='teaser-text'>
              Explore The World
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
