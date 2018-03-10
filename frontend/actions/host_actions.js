import * as APIUtil from '../util/host_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_HOSTS = 'RECEIVE_HOSTS';
export const RECEIVE_SINGLE_HOST = 'RECEIVE_SINGLE_HOST';


export const receiveHosts = hosts => {
  return {
    type: RECEIVE_HOSTS,
    hosts
  };
};

export const receiveSingleHost = host => {
  return {
    type: RECEIVE_SINGLE_HOST,
    host
  };
};

export const fetchHosts = filters => dispatch => {
  return APIUtil.fetchHosts(filters)
    .then((hosts) => dispatch(receiveHosts(hosts)));
};

export const fetchSingleHost = id => dispatch => {
  return APIUtil.fetchSingleHost(id)
    .then((host) => dispatch(receiveSingleHost(host)));
};
