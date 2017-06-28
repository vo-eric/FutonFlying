import { connect } from 'react-redux';
import HostShow from './host_show';
import { fetchSingleHome } from '../../actions/chair_actions';

const mapStateToProps = (state, { match }) => {
  const hostId = match.params.hostId;
  const host = selectHost(state, match.params.hostId);
  return { hostId, home }
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
