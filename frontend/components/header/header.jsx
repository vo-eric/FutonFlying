import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';
import ModalContainer from '../modal/modal_container';
import { login, logout } from '../../actions/session_actions';
import { receiveErrors, clearErrors } from '../../actions/error_actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.clearErrorsOpenModal = this.clearErrorsOpenModal.bind(this);
    this.handleDemoClick = this.handleDemoClick.bind(this);
  }

  handleClick(e) {
    this.props.logout();
  }

  handleDemoClick(e) {
    this.props.loginGuest({user: {username: 'cthanhvo', password: 'password'}});
  }

  clearErrorsOpenModal(component) {
    this.props.clearErrors();
    this.props.openModal(component);
  }

//Sign Out button will be changed to a photo with a drop down
//containing dashboard, profile, and sign out
  isLoggedIn() {
    if (this.props.currentUser) {
      return (
        <section className='header'>
          <section className='subheader'>
            <Link
              to={"/dashboard"}
              className='wordmark-link'
              style={{ textDecoration: 'none', color: '#D4490B'}}>
              <span className='wordmark'>futon flying</span>
            </Link>
            <div className='header-right'>
              <button
                className="sign-out"
                onClick={this.handleClick}>Sign Out</button>
            </div>
          </section>
        </section>
        //want this to redirect to the homepage
      );
    }
  }


    // user1 = User.create!({username: "thebigbo92", password: "boAndArro", fname: "Wen Bo", lname: "Xie"})

  notLoggedIn() {
    if (!this.props.currentUser) {
      return (
        <section className='header'>
          <section className='subheader'>
            <span className="wordmark">futon flying</span>
            <div className="auth-buttons">
              <button
                className='join-button'
                onClick={() => this.clearErrorsOpenModal(
                  <SessionFormContainer formType='signup' />)}>
                Join
              </button>

              <button
                className='login-button'
                onClick={() => this.clearErrorsOpenModal(
                  <SessionFormContainer formType='login' />)}>
                Log In
              </button>

              <button
                className='login-guest'
                onClick={this.handleDemoClick}
              >
                Guest
              </button>
            </div>
          </section>
        </section>
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
