import {
  connect
} from 'react-redux';
import {
  withRouter
} from 'react-router-dom';
import BookingsForm from './bookings_form';
import {
  closeDropdown
} from '../../actions/dropdown_actions';
import {
  fetchBookings,
  fetchSingleBooking,
  createBooking,
  deleteBooking
}
from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser,
    host: state.hosts[ownProps.match.params.id],
    errors: state.errors

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBookings: id => dispatch(fetchBookings(id)),
    createBooking: booking => dispatch(createBooking(booking)),
    closeDropdown: () => dispatch(closeDropdown())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsForm));