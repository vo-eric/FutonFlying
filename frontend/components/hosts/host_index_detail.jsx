import React from 'react';
import { Link } from 'react-router-dom';

class HostIndexDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.fetchSingleHost(this.props.host.id);
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
      <Link
        to={`/hosts/${this.props.host.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div
          className='host-index-module'
          onClick={this.handleClick}
        >
          <i className="fa fa-user img-placeholder" aria-hidden="true"></i>
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
    </Link>
    );
  }
}

export default HostIndexDetail;
