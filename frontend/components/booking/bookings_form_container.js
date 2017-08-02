import { connect } from 'react-redux';
import BookingsForm from './bookings_form';
import { closeDropdown } from '../../actions/dropdown_actions';
import { fetchBookings, fetchSingleBooking, createBooking, deleteBooking }
  from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser,
    host: state.hosts
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBooking: id => dispatch(fetchBooking(id)),
    createBooking: booking => dispatch(action(booking)),
    removeBookingErrors: () => dispatch(removeBookingErrors()),
    updateRoom: room => dispatch(updateRoom(room)),
    closeDropdown: () => dispatch(closeDropdown())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsForm);
