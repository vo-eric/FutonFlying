import React from 'react';
import BookingsFormContainer from '../booking/bookings_form_container';
import DropdownContainer from '../dropdown/dropdown_container';

class HostShow extends React.Component {
  constructor(props) {
    super(props);
    this.openDropdown = this.openDropdown.bind(this);
    this.renderBio = this.renderBio.bind(this);
  }

  openDropdown() {
    this.props.openDropdown();
  }

  componentDidMount() {
    this.props.fetchSingleHost(this.props.match.params.id);
  }

  acceptingGuests() {
    if (this.props.hostDetails.accepting_guests) {
      return (
        <div className='accepting-guests'>
          Accepting Guests
        </div>
      );
    } else {
      return(
        <div className='not-accepting-guests'>
          Not Accepting Guests
        </div>
      );
    }
  }

  renderBio() {
    if (!this.props.hostDetails.bio) {
      return `${this.props.hostDetails.fname} has not added a bio yet.`;
    } else {
      return this.props.hostDetails.bio;
    }
  }

  render () {
    if (!this.props.hostDetails) {
      return (
        <div>Loading...</div>
      );
    }
    let buttonStyle = !this.props.hostDetails.accepting_guests ? {cursor: 'not-allowed'} : {cursor: 'pointer'};
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
                disabled={!this.props.hostDetails.accepting_guests}
                onClick={() => this.openDropdown()}
                style={buttonStyle}
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
              {this.renderBio()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HostShow;
