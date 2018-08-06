import {
  RECEIVE_BOOKINGS,
  RECEIVE_CURRENT_BOOKING,
  RECEIVE_ERRORS,
  REMOVE_BOOKING,
  CLEAR_ERRORS
} from '../actions/booking_actions';

const BookingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_CURRENT_BOOKING:
      let currentBooking = {[action.booking.id]: action.booking};
      return Object.assign({}, state, currentBooking);
    case REMOVE_BOOKING:
      let newState = Object.assign({}, state);
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};

export default BookingReducer;
