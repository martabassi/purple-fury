import React, { Component } from 'react';
import User from './User';
import Rooms from './Rooms';
class Users extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2
          style={{
            color: 'white',
            fontWeight: 'lighter',
            paddingBottom: '10px'
          }}
        >
          USERS
        </h2>
        <hr />
        <User
          user={this.props.users}
          messages={this.props.messages}
          username={this.props.username}
          selected={this.props.selected}
        />
        <Rooms
          roomName={this.props.roomName}
          rooms={this.props.rooms}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
          onSubmit={this.props.onSubmit}
        />
      </div>
    );
  }
}

export default Users;
