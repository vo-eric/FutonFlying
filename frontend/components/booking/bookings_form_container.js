import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingsForm from './bookings_form';
import { closeDropdown } from '../../actions/dropdown_actions';
import { fetchBookings, fetchSingleBooking, createBooking, deleteBooking }
  from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    user: state.session.currentUser,
    host: state.hosts[ownProps.match.params.id]
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsForm));
