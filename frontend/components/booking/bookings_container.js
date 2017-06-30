import { connect } from 'react-redux';
import Bookings from './bookings';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchBookings } from '../../actions/booking_actions';

const mapStateToProps = state => {
  return {
    bookings: Object.keys(state.bookings).map(id => state.bookings[id])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
    openModal: (component) => dispatch(openModal(component)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
