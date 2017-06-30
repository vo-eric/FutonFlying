import React from 'react';
import HostShowDetail from './host_show_detail';
import HostMapContainer from '../hosts_map/hosts_map_container';
import ModalContainer from '../modal/modal_container';
import BookingsFormContainer from '../booking/bookings_form_container'

class HostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.host) {
      this.props.fetchSingleHost(this.props.hosts.id)
    }
  }

  clearErrorsOpenModal(component) {
    this.props.clearErrors();
    this.props.openModal(component);
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
    //

    // const hostId = this.props.hostDetails;
    return (
      <div className='host-show-main'>
        <div className='host-show-user'>
          <div className='host-show-photo'>
            <i className="fa fa-user show-img-placeholder" aria-hidden="true"></i>
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
                onClick={() => this.clearErrorsOpenModal(
                  <BookingsFormContainer />)}
              >
              Send Request
              </button>

              <button
                className='message-button'
              >
              <i className="fa fa-envelope-o message-icon" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HostShow;
