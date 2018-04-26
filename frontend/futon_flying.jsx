import configureStore from './store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

const getLocation = () => {
  var getPosition = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };
  getPosition()
    .then((position) => {
      window.localStorage['latitude'] = parseFloat(position.coords.latitude);
      window.localStorage['longitude'] = parseFloat(position.coords.longitude);
    })
    .catch((err) => {
      return "Using the default coordinates";
    });
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  if (!window.localStorage.latitude){
    window.localStorage['latitude'] = 40.215273;
    window.localStorage['longitude'] = -74.129379;
  }
  getLocation();

  ReactDOM.render(<Root store={store} />, root);
});
