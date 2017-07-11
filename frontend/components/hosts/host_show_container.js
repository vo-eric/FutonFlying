import { connect } from 'react-redux';
import HostShow from './host_show';
import { fetchSingleHost } from '../../actions/host_actions';
import { clearErrors } from '../../actions/error_actions';
import { openDropdown } from '../../actions/dropdown_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    hostDetails: state.hosts[ownProps.match.params.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSingleHost: (id) => dispatch(fetchSingleHost(id)),
    clearErrors: () => dispatch(clearErrors()),
    openDropdown: () => dispatch(openDropdown())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostShow);
