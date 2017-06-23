import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';
import ModalContainer from '../modal/modal_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.clearErrorsOpenModal = this.clearErrorsOpenModal.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
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
            <span className='wordmark'>futon flying</span>
            <div>
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
