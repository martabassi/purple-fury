import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import TopBar from './components/List/TopBar';
import Form from './components/Form/Form';
import Message from './components/Form/Message';
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
    rooms: [],
    roomClicked: '',
    roomPrivate: '',
    selectedMsg: [],
    notify: ''
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
        username: this.state.username,
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
    // this.createPrivateRooms(e);

    {
      this.state.roomPrivate !== '' ? this.invitePeopleInPrivate() : null;
    }

    fetch(`https://purple-fury.now.sh/users?token=${this.props.token}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        self.setState({
          users: res.users
        });
      });
  }
  createRoom = e => {
    if (e.target.name !== 'private') {
      e.preventDefault();
      this.setState({
        roomName: e.target.value
      });
    }
    if (e.target.name === 'private') {
      e.preventDefault();
      this.setState({
        roomPrivate: e.target.value
      });
    }
  };

  displayRoom = e => {
    this.setState(
      {
        roomClicked: e.target.name
      },
      console.log('ROOMCLICKED', this.state.roomClicked)
    );
    if (this.state.roomClicked) {
      this.postMessageToRoom();
    }
  };

  postMessageToRoom = () => {
    var self = this;
    console.log('STANZAA NELLA FETCH', self.state.roomClicked);
    fetch(
      `https://purple-fury.now.sh/rooms/${
        this.state.roomClicked
      }/messages?token=${this.props.token}`,
      {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(res => {
        console.log(res.messages);
        self.setState(
          {
            selectedMsg: res.messages
          },
          console.log(this.state.selectedMsg)
        );
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
        topic: 'the most beautiful topic',
        username: this.props.username
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          roomName: ''
        });

        const socket = openSocket(
          `https://purple-fury.now.sh/?token=${this.props.token}`
        );
      }, this.fetchRooms());
  };

  createPrivateRooms = e => {
    e.preventDefault();
    fetch('https://purple-fury.now.sh/rooms', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        room: this.state.roomPrivate,
        token: this.props.token,
        username: this.props.username,
        name: this.state.roomPrivate,
        topic: 'the most private room',
        isPrivate: true
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState(
          {
            privateRooms: res
          },
          console.log(this.state.privateRooms)
        );
      }, this.fetchRooms());
  };
  onChangeName = e => {
    e.preventDefault();
    var newName = e.target.value;
    this.setState({
      username: newName
    });
  };
  invitePeopleInPrivate = () => {
    fetch(`https://purple-fury.now.sh/rooms/${this.state.roomPrivate}/users`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: this.props.token,
        username: 'vincenzo'
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
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
        console.log(res);
        this.setState({
          rooms: res.rooms
        });
      });
  };
  onMessageReceived(data) {
    console.log('from-socket', data);
    // this.notifyUser();
    this.setState({
      messages: this.state.messages.concat([data])
    });
  }

  filterUsers = e => {
    e.preventDefault();
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(el => {
      const item = el.textContent;
      if (item.toLowerCase().indexOf(text) !== -1) {
        el.style.display = 'grid';
      } else {
        el.style.display = 'none';
      }
    });
  };

  findHashtag = e => {
    let check = e.target.value;
    if (check.includes('#') === true) {
      alert('Trovato hashtag!');
    }
  };

  // filterRooms = e => {
  //   console.log(e.target.value);

  //   var newArray = this.state.rooms.map(d => {
  //     return d.room.indexOf(e.target.value) !== -1;

  //   });
  //   console.log(newArray);
  //   this.setState({
  //     rooms: newArray
  //   });
  // };

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
        message: message,
        room: this.state.roomClicked
      })
    });

    this.setState({
      value: ''
    });
  }
  // notifyUser = () => {
  //   this.state.users.map(el => {
  //     this.state.value === `@${el.username}`
  //       ? this.setState({ notify: el.username })
  //       : null;
  //   });
  // };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Users
            className="Users"
            selected={
              this.state.roomClicked !== '' ? this.state.roomClicked : ''
            }
            onChange={e => this.createRoom(e)}
            onSubmit={this.postRoomsonServer}
            filter={e => this.filterUsers(e)}
            filterRooms={e => this.filterRooms(e)}
            messages={
              this.state.selectedMsg !== [] ? this.state.selectedMsg : ''
            }
            rooms={this.state.rooms}
            users={this.state.users !== [] ? this.state.users : ''}
            onClick={this.displayRoom}
            username={this.state.username !== '' ? this.state.username : ''}
            roomName={this.state.roomName}
          />
          <List
            className="List"
            username={this.state.username}
            messages={this.state.messages !== [] ? this.state.messages : ''}
            roomClicked={
              this.state.roomClicked !== '' ? this.state.roomClicked : ''
            }
          />
          <TopBar
            className="TopBar"
            username={this.state.username !== '' ? this.state.username : ''}
            logged={this.props.logged}
            messages={
              this.state.roomClicked !== '' ? this.state.roomClicked : ''
            }
            onClick={this.props.onClick}
          />
          <Form
            className="Form"
            user={this.state.users}
            room={this.state.rooms}
            value={this.state.value}
            findHashtag={e => this.findHashtag(e)}
            onChange={this.onChange}
            onClick={e => this.sendMessage(e, this.state.value)}
          />
          <TodoList
            logged={this.props.logged}
            hashtag={e => this.props.findHashtag(e)}
            onChangeRoom={e => this.createRoom(e)}
            onSubmitRoom={this.postRoomsonServer}
            onSubmitPrivate={e => this.createPrivateRooms(e)}
            username={this.state.username}
            onChangeUser={e => this.createPrivateRooms(e)}
            messages={
              this.state.selectedMsg !== [] ? this.state.selectedMsg : ''
            }
          />
          {this.state.notify !== '' ? (
            <Message notified={this.state.notify} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
