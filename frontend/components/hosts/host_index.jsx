import React from 'react';
import { Link, Route } from 'react-router-dom';
import HostIndexDetail from './host_index_detail';
import HostMapContainer from '../hosts_map/hosts_map_container';
class HostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: window.localStorage.latitude,
        lng: window.localStorage.longitude
      },
      style: { width: "70vw" },
      mapInFocus: false,
      selected: null
    };
    this.changeCenter = this.changeCenter.bind(this);
    // this.changeWidth = this.changeWidth.bind(this);
    this.getLocation = this.getLocation.bind(this)
  }

  componentDidMount() {
    // if (this.props.hosts) {
    this.getLocation();
    this.props.fetchHosts(this.state.center);
    // }
    // if (this.props.hosts) {
    // this.getLocation()
    // }
  }

  getLocation() {
    var getPosition = function (options) {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    };
    getPosition()
      .then((position) => {
        window.localStorage['latitude'] = parseFloat(position.coords.latitude);
        window.localStorage['longitude'] = parseFloat(position.coords.longitude);
        this.setState({
          center: {

            lat: parseFloat(position.coords.latitude),
            lng: parseFloat(position.coords.longitude)
          }
        });
      })
      .catch((err) => {
        return "Using the default coordinates";
      });
  };

  changeCenter(center, selected) {
    this.setState({ center, selected });
  }

  // changeWidth(e) {
  //   let newState = Object.assign({}, this.state);
  //   if (e.target.classList.value !== "") {
  //     newState.style = {};
  //     newState.mapInFocus = false;
  //   } else {
  //     newState.style = { width: '70vw' };
  //     newState.mapInFocus = true;
  //   }
  //   this.setState(newState);
  // }

  searchMap() {
    const { center, style } = this.state;
    return (
      <div className='google-map'>
        <HostMapContainer changeCenter={this.changeCenter} center={center} style={style} />
      </div>
    );
  }

  render() {
    const { selected } = this.state;
    if (!this.props.hosts) {
      return (
        <section className='hosts-search'>
          <div className='no-hosts'>
            <p>
              There are no rooms available at this location
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
        <section className='hosts-search'>
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
