import * as APIUtil from '../util/home_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_HOMES = 'RECEIVE_HOMES';
export const RECEIVE_SINGLE_HOME = 'RECEIVE_SINGLE_HOME';


export const receiveHomes = homes => {
  return {
    type: RECEIVE_HOMES,
    homes
  };
};

export const receiveSingleHome = home => {
  return {
    type: RECEIVE_SINGLE_HOME,
    home
  };
};

export const fetchHomes = filters => dispatch => {
  return APIUtil.fetchHomes(filters)
    .then((homes) => dispatch(receiveHomes(homes)))
};

export const fetchSingleHome = id => dispatch => {
  return APIUtil.fetchSingleHome(id)
    .then((home) => dispatch(receiveSingleHome(home)))
};

export const createHome = home => dispatch => {
  return APIUtil.createHome(home)
    .then((home) => dispatch(receiveSingleHome(home)))
};

export const updateHome = home => dispatch => {
  return APIUtil.updateHome(home)
    .then((home) => dispatch(receiveHome(home)))
};
