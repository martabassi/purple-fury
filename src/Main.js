import React, { Component } from 'react';
import App from './App';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Main extends Component {
  state = {
    logged: false
  };

  onChange = e => {
    console.log('ciccia');
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      logged: true
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
                password={this.state.password}
                logged={this.state.logged}
              />
            )}
          />
          <Route
            exact
            path="/chat"
            render={props => (
              <App
                username={this.state.username}
                password={this.state.password}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default Main;
