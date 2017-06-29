import React from 'react';

class HostDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (
      <div className='host-detail-module'>
        <div className='host-details' >
          <div className='host-detail-info'>
            <div className="host-name">
              { this.props.host.fname } { this.props.host.lname }
            </div>

            <div className='host-location'>
              { this.props.host.city }, { this.props.host.country }
            </div>
          </div>

          <div className='host-status'>
            { this.props.host.accepting_guests }
          </div>
        </div>

      </div>
    );
  }
}

export default HostDetail;
