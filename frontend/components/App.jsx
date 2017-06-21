import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>FutonFlying</h1>
      <p>this is a thing</p>
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
