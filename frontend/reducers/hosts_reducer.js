import { RECEIVE_HOSTS, RECEIVE_SINGLE_HOST } from '../actions/host_actions';

const initialState = {};

const HostsReducer = (state = initialState, action) => {
  // debugger
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_HOSTS:
      return action.hosts;
    case RECEIVE_SINGLE_HOST:
      // debugger
      newState = Object.assign({}, {[action.host.id]: action.host});
      return newState;
    default:
      return state;
  }
};

export default HostsReducer;
