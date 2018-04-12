import { connect } from 'react-redux';
import HostMap from './hosts_map';

import { fetchHosts } from '../../actions/host_actions';

const mapStateToProps = ({ hosts }) => {
  return {
    hosts: Object.values(hosts)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHosts: (location) => dispatch(fetchHosts(location))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostMap);
