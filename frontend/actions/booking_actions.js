import * as APIUtil from '../../booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_CURRENT_BOOKING = 'RECEIVE_CURRENT_BOOKING';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveBooking = bookings => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings
  };
};

export const receiveCurrentBooking = currentBooking {
  return {
    type: RECEIVE_CURRENT_BOOKING,
    currentBooking
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const createBooking = booking => dispatch => {
  return APIUtil.createBooking(booking)
    .then((booking) => dispatch(receiveCurrentBooking(booking),
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    )
  )
};

export const deleteBooking = booking => dispatch => {
  return APIUtil.deleteBooking(booking)
    .then((booking) => dispatch(deleteBooking(booking),
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    )
  )
};
