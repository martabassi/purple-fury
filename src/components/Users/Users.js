import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <ul>
          <li> Marta</li>
          <li> Katia</li>
          <li> Vincenzo</li>
        </ul>
      </div>
    );
  }
}

export default Users;
