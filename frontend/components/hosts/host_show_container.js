import { connect } from 'react-redux';
import HostShow from './host_show';
import { fetchSingleHost } from '../../actions/host_actions';

const mapStateToProps = state => {
  return {
    hostDetails: state.hosts,
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
