import React from 'react';
import HostShowDetail from './host_show_detail';
import HostMapContainer from '../hosts_map/hosts_map_container';
import BookingsFormContainer from '../booking/bookings_form_container';
import DropdownContainer from '../dropdown/dropdown_container';

class HostShow extends React.Component {
  constructor(props) {
    super(props);
    this.openDropdown = this.openDropdown.bind(this);
  }

  openDropdown() {
    this.props.openDropdown();
  }

  componentDidMount() {
    if (this.props.host) {
      this.props.fetchSingleHost(this.props.hosts.id)
    }
  }

  acceptingGuests() {
    if (this.props.hostDetails.accepting_guests) {
      return (
        <div className='show-accepting-guests'>
          Accepting Guests
        </div>
      );
    } else {
      return(
        <div className='show-no-guests'>
          Not Accepting Guests
        </div>
      );
    }
  }

  render () {
    return (
      <div className='host-show-main'>
        <div className='host-show-user'>
          <div className='host-photo'>
            <img
              src={this.props.hostDetails.avatar_url}
              className='host-show-photo'
            />
          </div>

          <div className='host-show-name'>
            {this.props.hostDetails.fname} {this.props.hostDetails.lname}
          </div>

          <div className='host-show-location'>
            {this.props.hostDetails.city}, {this.props.hostDetails.country}
          </div>

        </div>

        <div className='host-show-about'>
          <div className='host-booking'>
            { this.acceptingGuests() }
            <div className='booking-buttons'>
              <button
                className='request-button'
                onClick={() => this.openDropdown()}
              >
              Send Request
              </button>
            </div>
          </div>
          <DropdownContainer />
          <div className='about-me'>
            <div className='about-me-header'>
              About Me
            </div>

            <div className='about-me-body'>
              {this.props.hostDetails.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HostShow;
