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

export const fetchHomes = () => dispatch => {
  return APIUtil.fetchHomes()
    .then((homes) => dispatch(fetchHomes(homes)))
};
