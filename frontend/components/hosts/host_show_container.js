import { connect } from 'react-redux';
import HostShow from './host_show';
import { fetchSingleHost } from '../../actions/host_actions';

const mapStateToProps = (state, { match }) => {
  debugger;
  const hostId = match.params.hostId;
  const host = selectHost(state, match.params.hostId);
  return { hostId, host }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSingleHost: (id) => dispatch(fetchSingleHost),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostShow);
