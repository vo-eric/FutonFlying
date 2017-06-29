import React from 'react';
import HostShowDetail from './host_show_detail';

class HostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.host.id) {
      this.props.fetchSingleHost(this.props.hosts.id)
    }
  }

  render () {
    return (
      <div className='host-show-user'>
        <div className='host-show-name'>
          This is a user page  
        </div>
      </div>
    );
  }
}
