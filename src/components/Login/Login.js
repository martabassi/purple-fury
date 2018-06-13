import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            name="username"
            type="text"
            value={this.props.username}
            placeholder="choose you username"
            onChange={this.props.onChange}
          />
          <input
            name="password"
            value={this.props.password}
            type="text"
            placeholder="choose your password"
            onChange={this.props.onChange}
          />
          <input type="submit" onSubmit={this.props.onSubmit} />
          {this.props.logged ? <Redirect to="/chat" /> : null}
        </form>
      </div>
    );
  }
}

export default Login;
