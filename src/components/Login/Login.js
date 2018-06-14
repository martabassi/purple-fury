import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = styled.div`
  h1 {
    color: white;
    text-align: center;
    margin: 40px;
    font-size: 50px;
    font-weight: lighter;
  }

  border: none;
  height: 100vh;
  background: rgb(0, 154, 181);
  padding-top: 100px;
  form {
    padding: 10px;
    border: 1px solid white;
    margin: 0 auto;
    padding: 50px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    background-color: transparent !important;
    width: 500px;
    border-top-right-radius: 28px;
    border-top-left-radius: 28px;
    border-bottom-right-radius: 28px;
    text-align: center;
    input:first-child {
      border-bottom: 1px solid white;
      background-color: transparent;
      margin-bottom: 20px;
      :focus {
        outline: none;
      }
    }
    input::placeholder {
      color: white;
    }
    p {
      color: white;
      font-size: 16px;
      margin-bottom: 30px;
      text-align: center;
    }
  }
`;
class Login extends Component {
  render() {
    console.log(this.props);
    return (
      <LoginForm>
        <h1>Welcome To Purple Fury!</h1>

        <form onSubmit={this.props.onSubmit}>
          <p>Choose your nickname to start the chat!</p>
          <div>
            <input
              name="username"
              type="text"
              value={this.props.username}
              placeholder="choose you username"
              onChange={this.props.onChange}
            />
          </div>
          <input type="submit" onSubmit={this.props.onSubmit} />
          {this.props.logged && this.props.token !== '' ? (
            <Redirect to="/chat" />
          ) : null}
        </form>
      </LoginForm>
    );
  }
}

export default Login;
