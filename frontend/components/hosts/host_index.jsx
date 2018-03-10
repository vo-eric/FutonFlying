import React from 'react';
import { Link, Route } from 'react-router-dom';
import HostIndexDetail from './host_index_detail';
import HostMapContainer from '../hosts_map/hosts_map_container';
class HostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 40.7831,
        lng: -73.9712
      },
      style: { width: "70vw" },
      mapInFocus: false,
      selected: null
    };
    this.changeCenter = this.changeCenter.bind(this);
    this.changeWidth = this.changeWidth.bind(this);
  }

  componentDidMount() {
    if (this.props.hosts) {
      this.props.fetchHosts(this.props.hosts);
    }
  }

  changeCenter(center, selected) {
    this.setState({ center, selected });
  }

  changeWidth(e) {
    let newState = Object.assign({}, this.state);
    if (e.target.classList.value !== "") {
      newState.style = {};
      newState.mapInFocus = false;
    } else {
      newState.style = { width: '70vw' };
      newState.mapInFocus = true;
    }
    this.setState(newState);
  }

  searchMap() {
    const { center, style } = this.state;
    return (
      <div className='google-map'>
        <HostMapContainer center={center} style={style} />
      </div>
    );
  }

  render() {
    const { selected } = this.state;
    if (!this.props.hosts) {
      return (
        <section className='hosts-search' onClick={(e) => this.changeWidth(e)} >
          <div className='no-hosts'>
            <p>
              There are no rooms available at this city
            </p>
          </div>
          {this.searchMap()}
        </section>
      );
    } else {
      let hostsList = (
        <div className='host-list'>
          {this.props.hosts.map((host) => (
            <HostIndexDetail
              fetchSingleHost={this.props.fetchSingleHost}
              ref={host.id}
              key={host.id}
              host={host}
              selected={selected === host.id ? true : false}
              changeCenter={this.changeCenter}
            />
          )
          )}
        </div>
      );
      return (
        <section className='hosts-search' onClick={(e) => this.changeWidth(e)} >
          <div className="hosts-index">
            <div className="hosts-available">
              Available Hosts
            </div>
            {hostsList}
          </div>
          {this.searchMap()}
        </section>
      );
    }
  }
}

export default HostIndex;
