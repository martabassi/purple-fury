import React, { Component } from 'react';
import User from './User';
import Rooms from './Rooms';
class Users extends Component {
  state = {
    clicked: false
  };
  render() {
    return (
      <div className={this.props.className}>
        <div className="usersTitle">
          {this.state.clicked === true ? (
            <form className="formRooms" onSubmit={this.props.onSubmit}>
              <input
                className="inputRooms"
                placeholder="type user"
                type="text"
                onChange={this.props.filter}
              />
            </form>
          ) : (
            <h2
              style={{
                color: 'white',
                fontWeight: 'lighter',
                paddingBottom: '10px'
              }}
            >
              USERS
            </h2>
          )}
          <a onClick={() => this.setState({ clicked: !this.state.clicked })}>
            <i className="fa fa-search" />
          </a>
        </div>

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
          filterRooms={this.props.filterRooms}
          onClick={this.props.onClick}
          onSubmit={this.props.onSubmit}
        />
      </div>
    );
  }
}

export default Users;
