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
            placeholder="username"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
          />
        <br/>
        <span>
          or
        </span>
        <br/>
          <input type="submit" value="Submit" />
      </form>
    </div>
    );
  }


}

export default SessionForm;
