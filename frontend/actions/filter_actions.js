import { fetchHosts } from './host_actions';

// export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

// export const changeFilter = (filter, value) => {
//   return {
//     type: UPDATE_FILTER,
//     filter,
//     value
//   };
// };

export const updateBounds = (bounds) => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};

// export const updateFilter = (filter, value) => (dispatch, getState) => {
//   dispatch(changeFilter(filter, value));
//   return fetchHosts(getState().filters)(dispatch);
// };
