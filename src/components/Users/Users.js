import React, { Component } from 'react';
import User from './User';
import Rooms from './Rooms';
class Users extends Component {
  render() {
    console.log(this.props.room);
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
        {this.props.username.map((user, i) => {
          return <User user={user} key={i} />;
        })}
        <Rooms />
      </div>
    );
  }
}

export default Users;
