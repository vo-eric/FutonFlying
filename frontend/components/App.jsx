import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import ModalContainer from './modal/modal_container';
import SplashScreenContainer from './splash_screen/splash_screen_container';

const App = () => (
  <div>
    <section>
      <ModalContainer />
      <HeaderContainer />
      <p>
        Filler Text <br/>
        Filler Text <br/>
        Filler Text <br/>
        Filler Text <br/>
        Filler Text <br/>
        Filler Text <br/>
        Filler Text <br/>
      </p>
      <SplashScreenContainer />
    </section>
  </div>
);
export default App;
