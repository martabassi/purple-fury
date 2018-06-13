import React, { Component } from 'react';
import User from './User';
class Users extends Component {
  render() {
    console.log(this.props.username);
    return (
      <div className={this.props.className}>
        {this.props.username.map((user, i) => {
          return <User user={user} key={i} />;
        })}
      </div>
    );
  }
}

export default Users;
