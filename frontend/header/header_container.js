import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import Header from './header';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ( state ) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (component) => dispatch(openModal(component)),
    clearErrors: () => dispatch(clearErrors());
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
