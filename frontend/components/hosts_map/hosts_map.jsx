// import React from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';
// import MarkerManager from '../../util/marker_manager';
//
// const getCoordsObj = latLng => {
//   return {
//     lat: latLng.lat(),
//     lng: latLng.lng()
//   };
// };
//
// const mapOptions = {
//   center: {
//     lat: 10.252175,
//     lng: 106.369445
//   },
//   zoom: 13,
//   scrollwheel: false
// };
//
// class HostMap extends React.Component {
//
//   componentDidMount() {
//     this.map = new google.maps.Map(this.mapNode, mapOptions);
//     this.MarkerManager = new MarkerManager(this.map);
//     this.MarkerManager.updateMarkers(this.props.hosts);
//     this.registerListeners();
//   }
//
//   componentDidUpdate() {
//     this.MarkerManager.updateMarkers(this.props.hosts);
//   }
//
//   registerListeners() {
//     google.maps.event.addListener(this.map, 'idle', () => {
//       const { north, south, east, west } = this.map.getBounds().toJSON();
//       const bounds = {
//         northEast: { lat: north, lng: east },
//         southWest: { lat: south, lng: west } };
//       this.props.updateFilter('bounds', bounds);
//     });
//   }
//
//   render() {
//     return (
//       <div id='map-container' ref={ map => this.mapNode = map } />
//     );
//   }
// }
//
// export default withRouter(HostMap);
