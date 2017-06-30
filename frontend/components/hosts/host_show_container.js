import { connect } from 'react-redux';
import HostShow from './host_show';
import { fetchSingleHost } from '../../actions/host_actions';
import { openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    hostDetails: state.hosts[ownProps.match.params.id],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  debugger
  return {
  fetchSingleHost: (id) => dispatch(fetchSingleHost(id)),
  openModal: (component) => dispatch(openModal(component)),
  clearErrors: () => dispatch(clearErrors())
};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostShow);
