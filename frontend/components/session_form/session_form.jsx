import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../header/header';
import SessionFormContainer from './session_form_container';
import ModalContainer from '../modal/modal_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fname: "",
      lname: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrorsOpenModal = this.clearErrorsOpenModal.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  clearErrorsOpenModal(component) {
    this.props.clearErrors();
    this.props.openModal(component);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({},this.state);
      if (this.props.formType === 'login') {
        this.props.login({ user }).then(this.props.closeModal);
      } else if (this.props.formType === 'signup') {
        this.props.signup({ user }).then(this.props.closeModal);
      }
      this.setState({username: "", password: "", fname: "", lname: ""})
  }

  handleName() {
    if (this.props.formType === 'signup') {
      return (
        <div className='whole-name'>
          <input
            type="text"
            placeholder="first name"
            value={this.state.fname}
            onChange={this.update('fname')}
            className="left-name"
          />

          <input
            type="text"
            placeholder="last name"
            value={this.state.lname}
            onChange={this.update('lname')}
            className="right-name"
          />
      </div>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  modalToRender() {
    if (this.props.formType === 'login') {
      return(
        <section>
          <div className='modal-head'>
            Log in to Futon Flying
          </div>
        </section>
      );
    } else if (this.props.formType === 'signup'){
      return(
        <section>
          <div className='modal-head'>
            Join Futonflying for free
          </div>
        </section>
      )
    } else {
      return ("You are here because formType is not login or signup");
    }
  }

  renderButton() {
    if (this.props.formType === 'signup') {
      return (
        <input
          type='submit'
          value='Create an Account'
          className='submit-button'
        />
      );
    } else if (this.props.formType === 'login'){
      return (
        <input
          type='submit'
          value='Log In'
          className='submit-button'
        />
      );
    }
  }

  switchForm() {
    if (this.props.formType === 'signup') {
      return (
        <div className='footer'>
          <div className='alt-text'>
            Already a member?
            <br/>
            <br/>
            <button
              className='form-switch'
              onClick={() => this.clearErrorsOpenModal(
                <SessionFormContainer formType='login' />)}
            >
            Log In
            </button>
          </div>
        </div>
      );
    } else if (this.props.formType === 'login') {
      return (
        <div className='footer'>
          <div className='alt-text'>
            Don't have an account?
            <br/>
            <br/>
            <button
              className='form-switch'
              onClick={() => this.clearErrorsOpenModal(
                <SessionFormContainer formType='signup' />)}
            >
            Join
            </button>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='user-form'>
            {this.modalToRender()}
            {this.renderErrors()}
            {this.handleName()}
            <div className='auth-form'>
              <input
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.update('username')}
                className="sign-log"
                />
              <br/>
              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="sign-log"
                />
              {this.renderButton()}
              {this.switchForm()}
            </div>
          </div>
        </form>
      </div>
    );
  }


  //NOTE: want to add a guest user

}

export default SessionForm;
