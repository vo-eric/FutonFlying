import React from 'react';

class HostIndexDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  acceptingGuests() {
    if (this.props.host.accepting_guests) {
      return (
        <div className='index-accepting-guests'>
          ACCEPTING <br/>
          GUESTS
        </div>
      );
    } else {
      return(
        <div className='index-no-guests'>
          NOT <br/>
          ACCEPTING <br/>
          GUESTS
        </div>
      );
    }
  }

  render() {
    return (
        <div className='host-index-module'>
          <div className='host-index-details' >
            <div className='host-index-info'>
              <div className="host-index-name">
                { this.props.host.fname } { this.props.host.lname }
              </div>

              <div className='host-index-location'>
                { this.props.host.city }, { this.props.host.country }
              </div>
            </div>
            { this.acceptingGuests() }
          </div>
        </div>
    );
  }
}

export default HostIndexDetail;
