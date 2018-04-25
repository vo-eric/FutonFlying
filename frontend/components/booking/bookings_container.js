import { connect } from 'react-redux';
import Bookings from './bookings';
import { fetchBookings } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookings: Object.keys(state.bookings).map(id => state.bookings[id]),
    currentUser: state.session.currentUser,
    formType: ownProps.formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBookings: id => dispatch(fetchBookings(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
