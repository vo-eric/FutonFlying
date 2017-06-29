import React from 'react';
import { Link, Route } from 'react-router-dom';
import HostDetail from './host_show_detail';

class HostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger

    if (this.props.hosts.length === 0) {
      return (
        <div className='no-host-availability'>
          <p>
            There are no rooms available at this city
          </p>
        </div>
      )
    } else {
      let hostsList = (
        <div className='host-list'>
          {this.props.hosts.map((host) => (
            <HostItem key={host.id} host={host} />
          )
        )}>
        </div>
      );

      return (
        <section className="hosts-index">
          <div className="hosts-header">
            <div className="hosts-available">
              Available Hosts
            </div>
          </div>
          { hostsList }
        </section>
      );
    }
  }

};

export default HostShow;
