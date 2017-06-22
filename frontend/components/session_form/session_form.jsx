import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }
  // if (this.props.formType === 'login') {
  //   this.props.login({user}).then(this.props.closeModal);
  // } else if (this.props.formType === 'signup') {
  //   this.props.singup({user}).then(this.props.closeModal);
  // }

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

  render() {
    if (this.props.formType === 'login') {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
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
        </form>
      </div>
      );
    } else if (this.props.formType === 'signup') {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="first name"
              value={this.state.fname}
              onChange={this.update('fname')}
              className="signup-input"
            />

            <input
              type="text"
              placeholder="last name"
              value={this.state.lname}
              onChange={this.update('lname')}
              clasName="signup-input"
            />

            <input
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.update('username')}
              clasName="signup-input"
            />

            <input
              type="text"
              placeholder="password"
              value={this.state.password}
              onChange={this.update('password')}
              clasName="signup-input"
            />

          </form>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
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
          </form>
        </div>
      );
    }
  }

  //NOTE: want to add a guest user

}

export default SessionForm;
