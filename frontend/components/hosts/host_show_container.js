import { connect } from 'react-redux';
import HostShow from './host_show';
import { fetchHosts } from '../../actions/host_actions';

const mapStateToProps = (state) => {
  debugger
  return {
    hosts: Object.keys(state.hosts).map(id => state.hosts[id])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  debugger
  return {
    fetchHosts: (hosts) => dispatch(fetchHosts(hosts)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostShow);
