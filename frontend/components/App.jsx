import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import HeaderContainer from './header/header_container';
import ModalContainer from './modal/modal_container';
import SplashScreenContainer from './splash_screen/splash_screen_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

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
      <AuthRoute exact path='/' component={SplashScreenContainer} />
    </section>
  </div>
);
export default App;
