import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <section>
      <ModalContainer />
      <HeaderContainer />
    </section>
  </div>
);

export default App;
