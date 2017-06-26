import * as APIUtil from '../util/home_api_util';

export const RECEIVE_HOMES = 'RECEIVE_HOMES';

export const receiveHomes = homes => {
  return {
    type: RECEIVE_HOMES,
    homes
  };
};

export const fetchHomes = () => dispatch => {
  return APIUtil.fetchHomes()
    .then((homes) => dispatch(fetchHomes(homes)))
};
