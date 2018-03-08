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
    lat: 34.043911,
    lng: -118.265189
  },
  zoom: 7,
  scrollwheel: false
};
class HostMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hosts: this.props.hosts,
      style: this.props.style
    };
    this.renderHosts = this.renderHosts.bind(this);
  }
  componentDidMount(props) {
    if (this.props.center) {
      mapOptions.center = this.props.center;
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers();
    // this.MarkerManager.updateMarkers(this.props.hosts);
  }
  renderHosts(hosts, map) {
    if (hosts.length) {
      hosts.forEach(host => {
        var contentString = '<div id="iw-container">' +
          '<div class="iw-title">' + '<a href="/#/hosts/' + host.id + '">' + host.fname + " " + host.lname + '</a>' + '</div>' +
          '<div class="iw-content">' +
          '<div class="iw-subTitle">My Couch</div>' +
          '<img src=' + host.avatar_url + ' alt=' + host.fname + '_picture height="100" width="100">' +
          '<p>' + host.description + '</p>' + '</div>';
        const { lat, lng } = host;
        let marker = new google.maps.Marker({
          position: { lat, lng },
          map,
          icon: "https://i.imgur.com/1kFqqW8.png"
        });
        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          // maxWidth: 350,
          title: host.city
        });
        marker.addListener('click', function () {
          infowindow.open(map, marker);
        });
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
      this.setState({ style: nextProps.style })
    }
  }
  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map} style={this.state.style} />);
  }
}
export default withRouter(HostMap);
