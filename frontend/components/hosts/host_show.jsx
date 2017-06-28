import React from 'react';
import { Link, Route } from 'react-router-dom';

class HostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleHost(this.props.hostId);
  }

  render () {
    return (
      <div className='host-name'>
        {host.fname} {host.lname}
      </div>
    );
  }
};

export default HostShow;
