import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal} from '../../actions/modal_actions';
import { login, signup, logout, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
  };
};
// formtype: state.modal.component.props.formType

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    openModal: (component) => dispatch(openModal(component)),
    formType
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
