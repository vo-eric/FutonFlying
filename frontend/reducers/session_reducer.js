import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let errors;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, nullUser, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, { errors });
    case CLEAR_ERRORS:
      const newState = Object.assign({}, state);
      newState.errors = [];
      return Object.assign({}, newState);
    default:
      return state;
  }
};

export default SessionReducer;
