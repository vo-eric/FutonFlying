import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Header from './header';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ( state ) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginWenBo: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    openModal: (component) => dispatch(openModal(component))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
