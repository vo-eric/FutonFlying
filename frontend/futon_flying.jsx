import configureStore from './store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { RECEIVE_HOMES, fetchHomes } from './actions/home_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchHomes = store.fetchHomes;

  ReactDOM.render(<Root store={store} />, root);
});
