import { connect } from 'react-redux';
import HostMap from './hosts_map';

import { fetchHosts } from '../../actions/host_actions';

const mapStateToProps = ({ hosts }) => {
  return {
    hosts: hosts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHosts: () => dispatch(fetchHosts())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostMap);
