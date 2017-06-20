import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';

import React from 'react';
import ReactDOM from 'react-dom';

window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>THIS IS FUTONFLYING!</h1>, root);
});
