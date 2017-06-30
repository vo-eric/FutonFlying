import React from 'react';
import HostShowDetail from './host_show_detail';
import HostMapContainer from '../hosts_map/hosts_map_container';


class HostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.host) {
      this.props.fetchSingleHost(this.props.hosts.id)
    }
  }

  render () {
    //

    // const hostId = this.props.hostDetails;
    return (
      <div className='host-show-main'>
        <div className='host-show-user'>
          <div className='host-show-photo'>
            <i className="fa fa-user img-placeholder" aria-hidden="true"></i>
          </div>

          <div className='host-show-name'>
            {this.props.hostDetails.fname} {this.props.hostDetails.lname}
          </div>

          <div className='host-show-location'>
            {this.props.hostDetails.city}, {this.props.hostDetails.country}
          </div>

          <div>
            PLEASE TELL ME THIS WORKED
          </div>

        </div>
      </div>
    );
  }
}

// {this.props.hostDetails.#THERE.fname} {this.props.hosts.match.params.id}


export default HostShow;
