import React from 'react';

class HostShowDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return {
      <div className='host-show-module'>
        <div className='host-show-details'>
          <div className='host-show-name'>
            {this.props.host.fname} {this.props.host.lname}
          </div>

          <div className='host-show-location'>
            {this.props.host.city}, {this.props.host.country}
          </div>
        </div>
      </div>
    }
  }
}
