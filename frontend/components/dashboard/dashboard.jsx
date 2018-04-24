import React from 'react';
import { Link } from 'react-router-dom';
import BookingsContainer from '../booking/bookings_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.showTrips = this.showTrips.bind(this);
    // this.renderUserPhoto = this.renderUserPhoto.bind(this);
  }

  showTrips() {
    return <BookingsContainer />;
    //if trips > 0, show the upcoming trips
    //else "You don't have any upcoming trips"
  }

  showGuests() {
    //if guests > 0, show all upcoming guests
    //else "You don't have any upcoming guests"
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
          </div>
        </div>

        <div className='trips'>

          <div className='teaser'>
            <div className='teaser-text'>
              Explore Europe
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
              You don't have any upcoming guests
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Dashboard;
