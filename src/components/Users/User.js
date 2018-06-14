import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="User">
        <div className="users">
          <div className="fotoUser">{this.props.user[0]}</div>
          {this.props.user}
        </div>
      </div>
    );
  }
}

export default User;
