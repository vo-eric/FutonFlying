import { connect } from 'react-redux';
import HostIndex from './host_index';
import { fetchHosts, fetchSingleHost } from '../../actions/host_actions';

const mapStateToProps = (state) => {
  return {
    hosts: Object.keys(state.hosts).map(id => state.hosts[id])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //
  return {
    fetchHosts: (hosts) => dispatch(fetchHosts(hosts)),
    fetchSingleHost: (id) => dispatch(fetchSingleHost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostIndex);
