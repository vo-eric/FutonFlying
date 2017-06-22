import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <HeaderContainer />
    <ModalContainer />
    <p> YOU CANT STOP THE BEAT. YOU CANT STOP THE BEAT.
      YOU CANT STOP THE BEAT. YOU CANT STOP THE BEAT.
      YOU CANT STOP THE BEAT. YOU CANT STOP THE BEAT. 
      YOU CANT STOP THE BEAT. YOU CANT STOP THE BEAT.
      YOU CANT STOP THE BEAT. YOU CANT STOP THE BEAT. </p>
  </div>
);

export default App;
