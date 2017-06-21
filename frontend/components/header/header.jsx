import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  isLoggedIn() {
    if (!this.props.currentUser) {
      return (
        <span onClick={this.handleClick}>Sign Out</span>
        //want this to redirect to the homepage
      );
    }
  }

  notLoggedIn() {
    if (!this.props.currentUser) {
      return (
        <div>
          <span>Sign Up</span>

          <span>Log In</span>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.isLoggedIn()}
        {this.notLoggedIn()}
      </div>
    );
  }
}

export default Header;
