import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.booking.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openModal: (component) => dispatch(openModal(component)),
    closeModal: () => dispatch(closeModal())
  };
};
