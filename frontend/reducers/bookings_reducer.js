import {
  RECEIVE_BOOKINGS,
  RECEIVE_CURRENT_BOOKING,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/booking_actions';

const nullBooking = {
  currentBooking: null
}

const BookingReducer = (state = nullBooking, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      const bookings = action.bookings
      return Object.assign({}, nullBooking, { bookings });
    case RECEIVE_CURRENT_BOOKING:
      const currentBooking = action.currentBooking;
      return Object.assign({}, state, { currentBooking });
    default:
      return sate;
  }
};

export default BookingReducer;
