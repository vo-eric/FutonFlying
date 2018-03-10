import * as APIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const login = user => dispatch => {
  return APIUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user),
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    )
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then((user) => dispatch(receiveCurrentUser(null),
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    )
  );
};

export const signup = user => dispatch => {
  return APIUtil.signup(user)
    .then((user) =>  dispatch(receiveCurrentUser(user),
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      }
    )
  );
};
