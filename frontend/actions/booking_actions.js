import * as APIUtil from '../util/booking_api_util';
import {
  receiveErrors
} from './error_actions';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_CURRENT_BOOKING = 'RECEIVE_CURRENT_BOOKING';
export const CANCEL_BOOKING = 'CANCEL_BOOKING';

export const receiveBookings = bookings => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings
  };
};

export const receiveCurrentBooking = booking => {
  return {
    type: RECEIVE_CURRENT_BOOKING,
    booking
  };
};

export const cancelBooking = bookingId => {
  return {
    type: CANCEL_BOOKING,
    bookingId
  };
};

export const fetchBookings = id => dispatch => {
  return APIUtil.fetchBookings(id)
    .then((bookings) => {
      dispatch(receiveBookings(bookings))},
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    );
};

export const fetchSingleBooking = id => dispatch => {
  return APIUtil.fetchSingleBooking(id)
    .then((booking) => dispatch(receiveCurrentBooking(booking),
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    ));
};

export const createBooking = booking => dispatch => (
  APIUtil.createBooking(booking)
  .then(confirmation => dispatch(receiveCurrentBooking(confirmation)), (err) => dispatch(receiveErrors(err.responseJSON))));

export const deleteBooking = bookingId => dispatch => {
  return APIUtil.deleteBooking(bookingId)
    .then(() => dispatch(cancelBooking(bookingId),
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    ));
};