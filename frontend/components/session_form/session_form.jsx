import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../header/header';
import SessionFormContainer from './session_form_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
    const user = this.state;
    this.props.processForm({user});
  }

  handleFName() {
    if (this.props.formType === 'signup') {
      return (
        <input
          type="text"
          placeholder="first name"
          value={this.state.fname}
          onChange={this.update('fname')}
          className="signup-input"
        />
      );
    }
  }

  handleLName() {
    if (this.props.formType === 'signup') {
      return (
        <input
          type="text"
          placeholder="last name"
          value={this.state.lname}
          onChange={this.update('lname')}
          clasName="signup-input"
        />
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
          <div className='sign-log'>
            Log in to Futon Flying
          </div>
        </section>
      );
    } else {
      return(
        <section>
          <div className='sign-log'>
            Sign up for Futon Flying
          </div>
        </section>
      )
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.modalToRender()}
          {this.renderErrors()}
          {this.handleFName()}
          {this.handleLName()}
          <div className='user-form'>
            <input
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
            <br/>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          <br/>
          <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }


  //NOTE: want to add a guest user

}

export default SessionForm;
