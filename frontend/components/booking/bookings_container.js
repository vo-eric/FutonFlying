import { connect } from 'react-redux';
import Bookings from './bookings';
import { fetchBookings } from '../../actions/booking_actions';

const mapStateToProps = state => {
  return {
    bookings: Object.keys(state.bookings).map(id => state.bookings[id])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
