import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
const getCoordsObj = latLng => {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
};
const mapOptions = {
  center: {
    lat: 40.7831,
    lng: 73.9712
  },
  zoom: 12,
  scrollwheel: false
};

class HostMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hosts: this.props.hosts,
      style: this.props.style,
      previousMarker: null
    };
    this.renderHosts = this.renderHosts.bind(this);
  }
  componentDidMount(props) {
    if (this.props.center) {
      mapOptions.center = this.props.center;
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }
  renderHosts(hosts, map) {
    if (hosts.length) {
      hosts.forEach(host => {
        var contentString = `<div id="iw-container">
          <div class="iw-title">
            <a class="iw-name-link" href="/#/hosts/${host.id}">
              ${host.fname} ${host.lname}
            </a>
            <hr>
          </div>

          <div class="iw-content">
            <div class="iw-subTitle">
              About Me
            </div>
            <img src="${host.avatar_url}" alt="${host.fname}_picture height="100" width="100">
            <p>${host.description}</p>
          </div>`;
        const { lat, lng } = host;

        let marker = new google.maps.Marker({
          position: { lat, lng },
          map,
          icon: "https://i.imgur.com/1kFqqW8.png"
        });
        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          title: host.city
        });
        marker.addListener('click', function () {
          if (this.state.previousMarker) {
            this.state.previousMarker.close();
          }
          infowindow.open(map, marker);
          this.setState({previousMarker: infowindow});
        }.bind(this));
        google.maps.event.addListener(map, 'click', function () {
          infowindow.close();
        });
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.center !== nextProps.center) {
      this.map.setZoom(12);
      this.map.panTo(nextProps.center);
      if (this.state.hosts !== nextProps.hosts) {
        this.renderHosts(nextProps.hosts, this.map);
      }
    }
    if (this.state.style !== nextProps.style) {
      this.setState({ style: nextProps.style });
    }
  }
  render() {
    return (
      <div
        id='map-container'
        ref={map => this.mapNode = map}
        style={this.state.style} />
    );
  }
}
export default withRouter(HostMap);
