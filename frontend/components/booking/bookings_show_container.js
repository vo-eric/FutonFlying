import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingsShow from './bookings_show';
import { fetchSingleBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookingDetails: state.bookings[ownProps.match.params.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSingleBooking: (id) => dispatch(fetchSingleBooking(id)),
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsShow));
