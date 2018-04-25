import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session_form/session_form_container';
import HeaderContainer from './header/header_container';
import ModalContainer from './modal/modal_container';
import SplashScreenContainer from './splash_screen/splash_screen_container';
import HostIndexContainer from './hosts/host_index_container';
import HostShowContainer from './hosts/host_show_container';
import DashboardContainer from './dashboard/dashboard_container';
import SearchContainer from './search/search_container';
import BookingContainer from './booking/bookings_container';

const App = () => (
  <div>
    <ModalContainer />
    <HeaderContainer />
    
    <div id="main-content">
      <Switch>
          <AuthRoute exact path='/' component={SplashScreenContainer} />
          <ProtectedRoute exact path='/dashboard' component={DashboardContainer} />
          <ProtectedRoute path='/search' component={SearchContainer} />
          <ProtectedRoute exact path='/hosts' component={HostIndexContainer} />
          <ProtectedRoute exact path='/hosts/:id' component={HostShowContainer} />
          <ProtectedRoute exact path='/bookings' component={BookingContainer} />
      </Switch>
    </div>
  </div>
);
export default App;
