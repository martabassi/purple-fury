import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import TopBar from './components/List/TopBar';
import Form from './components/Form/Form';
import openSocket from 'socket.io-client';
import Users from './components/Users/Users';
import TodoList from './components/Todo/TodoList';

class App extends Component {
  state = { username: [], token: [], messages: [], value: '', rooms: [] };
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
          value: '',
          username: this.state.username.concat(res.username)
        });
        const socket = openSocket(
          `https://purple-fury.now.sh/?token=${res.token}`
        );
        socket.on('messages', data => {
          console.log(data);
          self.onMessageReceived(data);
          self.onRoomCreated(data);
        });
      });
  }

  onMessageReceived(data) {
    console.log('from-socket', data);
    this.setState({ messages: this.state.messages.concat([data]) });
    console.log(this.state.messages);
  }
  onRoomCreated(data) {
    console.log('from-socket', data.room);
    this.setState({ room: this.state.rooms.concat(data.room) });
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
        <div className="wrapper">
          <Users
            className="Users"
            room={this.state.messages}
            username={this.state.username}
          />
          <List
            className="List"
            username={this.props.username}
            messages={this.state.messages}
          />
          <TopBar className="TopBar" username={this.state.username} />
          <Form
            className="Form"
            onChange={this.onChange}
            onClick={e => this.sendMessage(e, this.state.value)}
          />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
