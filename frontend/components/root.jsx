import React from 'react';
import { Provider } from 'react-redux';
import { Hashrouter } from 'react-router-dom';
import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <Hashrouter>
      <App />
    </Hashrouter>
  </Provider>
);

export default Root;
