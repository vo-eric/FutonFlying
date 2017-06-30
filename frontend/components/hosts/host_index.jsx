import React from 'react';
import { Link, Route } from 'react-router-dom';
import HostIndexDetail from './host_index_detail';
import HostMapContainer from '../hosts_map/hosts_map_container';

class HostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    if (this.props.hosts) {
      this.props.fetchHosts(this.props.hosts);
    }
  }

  searchMap() {
    return (
      <div className='google-map'>
        <HostMapContainer />
      </div>
    );
  }

  render() {
    if (this.props.hosts.length === 0) {
      return (
        <section className='hosts-search'>
          <div className='no-hosts'>
            <p>
              There are no rooms available at this city
            </p>
          </div>
          { this.searchMap() }
        </section>
      )
    } else {
      let hostsList = (
        <div className='host-list'>
          {this.props.hosts.map((host) => (
            <HostIndexDetail
              fetchSingleHost={this.props.fetchSingleHost}
              key={host.id}
              host={host}
            />
          )
        )}
        </div>
      );

      return (
        <section className='hosts-search'>
          <div className="hosts-index">
            <div className="hosts-available">
              Available Hosts
            </div>
              { hostsList }
          </div>
          { this.searchMap() }
        </section>
      );
    }
  }
};

export default HostIndex;
