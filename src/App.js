import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import TopBar from './components/List/TopBar';
import Form from './components/Form/Form';
import openSocket from 'socket.io-client';
import Users from './components/Users/Users';

class App extends Component {
  state = { username: [], token: [], messages: [], value: '' };
  componentDidMount() {
    var self = this;

    fetch('https://purple-fury.now.sh/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.props.username,
        password: 'secret'
      })
    })
      .then(res => res.json())
      .then(res => {
        self.setState({
          token: res.token,
          username: this.state.username.concat([res.username])
        });
        console.log(res);
        const socket = openSocket(
          `https://purple-fury.now.sh/?token=${res.token}`
        );
        socket.on('messages', data => {
          self.onMessageReceived(data);
        });
      });
  }

  onMessageReceived(data) {
    console.log('from-socket', data);
    this.setState({ messages: this.state.messages.concat([data]) });
  }
  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  sendMessage(e, message) {
    e.preventDefault();
    fetch('https://purple-fury.now.sh/messages', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: this.state.token,
        message: message
      })
    });
  }
  render() {
    return (
      <div className="App">
        <Users className="Users" />
        <List className="List" messages={this.state.messages} />
        <TopBar className="TopBar" username={this.state.username} />
        <Form
          className="Form"
          onChange={this.onChange}
          onClick={e => this.sendMessage(e, this.state.value)}
        />
      </div>
    );
  }
}

export default App;
