import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import TopBar from './components/List/TopBar';
import Form from './components/Form/Form';
import openSocket from 'socket.io-client';
import Users from './components/Users/Users';
import TodoList from './components/Todo/TodoList';

class App extends Component {
  state = {
    username: this.props.username,
    users: [],
    token: this.props.token,
    messages: [],
    value: '',
    roomName: '',
    rooms: []
  };
  componentDidMount() {
    var self = this;

    fetch('https://purple-fury.now.sh/messages', {
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
        const socket = openSocket(
          `https://purple-fury.now.sh/?token=${this.props.token}`
        );
        socket.on('messages', data => {
          console.log(data);
          self.onMessageReceived(data);
        });
      });
    this.fetchRooms();
    fetch(`https://purple-fury.now.sh/users?token=${this.props.token}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.users[0]);
        self.setState(
          {
            users: res.users
          },
          console.log(this.state.username)
        );
      });
  }
  createRoom = e => {
    e.preventDefault();
    this.setState({
      roomName: e.target.value
    });
  };

  postRoomsonServer = e => {
    e.preventDefault();
    fetch('https://purple-fury.now.sh/rooms', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        room: this.state.rooms,
        token: this.state.token,
        name: this.state.roomName,
        topic: 'the most beautiful topic'
      })
    })
      .then(res => res.json())
      .then(res => {
        const socket = openSocket(
          `https://purple-fury.now.sh/?token=${this.props.token}`
        );
      }, this.fetchRooms());
  };
  fetchRooms = () => {
    fetch(`https://purple-fury.now.sh/rooms?token=${this.props.token}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          rooms: res.rooms
        });
      });
  };
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
        <div className="wrapper">
          <Users
            className="Users"
            onChange={e => this.createRoom(e)}
            onSubmit={this.postRoomsonServer}
            rooms={this.state.rooms}
            users={this.state.users !== [] ? this.state.users : ''}
            username={this.state.username}
            roomName={this.state.roomName}
          />
          <List
            className="List"
            username={this.props.username}
            messages={this.state.messages}
          />
          <TopBar
            className="TopBar"
            username={this.state.username}
            logged={this.props.logged}
            onClick={this.props.onClick}
          />
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
