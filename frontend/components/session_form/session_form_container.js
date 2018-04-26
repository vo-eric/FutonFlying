import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal} from '../../actions/modal_actions';
import { login, signup, logout } from '../../actions/session_actions';
import SessionForm from './session_form';
import Header from '../header/header'
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: state.modal.component.props.formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    openModal: (component) => dispatch(openModal(component))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
