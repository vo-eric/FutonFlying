import { connect } from 'react-redux';
import HostShow from './host_show';
import { fetchSingleHost } from '../../actions/host_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    hostDetails: state.hosts[ownProps.match.params.id],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleHost: (id) => dispatch(fetchSingleHost(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostShow);
