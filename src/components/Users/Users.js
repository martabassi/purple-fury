import React, { Component } from 'react';
import User from './User';
class Users extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <User listUsers={this.props.username} />
      </div>
    );
  }
}

export default Users;
