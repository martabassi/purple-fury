import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import TopBar from './components/List/TopBar';
import Form from './components/Form/Form';
import openSocket from 'socket.io-client';
import Users from './components/Users/Users';

class App extends Component {
  state = {
    token: '',
    username: '',
    password: '',
    messages: []
  };
  render() {
    return (
      <div className="App">
        <Users className="Users" />
        <List className="List" />
        <TopBar className="TopBar" />
        <Form className="Form" />
      </div>
    );
  }
}

export default App;
