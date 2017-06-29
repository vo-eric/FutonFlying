import React from 'react';
import { Link, Route } from 'react-router-dom';
import HostIndexDetail from './host_index_detail';

class HostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.hosts) {
      this.props.fetchHosts(this.props.hosts);
    }
  }

  render() {
    if (this.props.hosts.length === 0) {
      return (
        <div className='no-hosts'>
          <p>
            There are no rooms available at this city
          </p>
        </div>
      )
    } else {
      let hostsList = (
        <div className='host-list'>
          {this.props.hosts.map((host) => (
            <HostIndexDetail key={host.id} host={host} />
          )
        )}
        </div>
      );

      return (
        <section className="hosts-index">
          <div className="hosts-available">
            Available Hosts
          </div>
          { hostsList }
        </section>
      );
    }
  }

};

export default HostIndex;
