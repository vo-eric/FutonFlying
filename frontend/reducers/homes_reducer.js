import { RECEIVE_HOMES, RECEIVE_SINGLE_HOME } from '../actions/home_actions';

const initialState = {};

const HomesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_HOMES:
      return action.homes;
    case RECEIVE_SINGLE_HOME:
      newState = Object.assign({}, state, {[action.home.id]: action.home});
      return newState;
    default:
      return state;
  }
};

export default HomesReducer;
