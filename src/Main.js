import React, { Component } from 'react';
import App from './App';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Main extends Component {
  state = {
    logged: false,
    username: '',
    token: ''
  };

  fetcha = () => {
    const self = this;
    fetch('https://purple-fury.now.sh/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: self.state.username,
        password: 'secret'
      })
    })
      .then(res => res.json())
      .then(res => {
        self.setState({
          token: res.token
        });
      });
  };

  onChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.fetcha();
    console.log(this.state.token);
    this.changeLogged();
  };
  changeLogged = e => {
    this.setState({
      logged: !this.state.logged
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Login
                onChange={e => this.onChange(e)}
                onSubmit={e => this.onSubmit(e)}
                username={this.state.username}
                logged={this.state.logged}
                token={this.state.token}
              />
            )}
          />
          <Route
            exact
            path="/chat"
            render={props => (
              <App
                token={this.state.token}
                username={this.state.username}
                logged={this.state.logged}
                onClick={this.changeLogged}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default Main;
