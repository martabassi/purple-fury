import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="User">
        <ul className="users">
          <li className="usersList">
            <div className="fotoUser">{this.props.username[0]}</div>
            {this.props.username}
          </li>
          {this.props.user.map(us => {
            return (
              <li className="usersList">
                <div className="fotoUser">{us.username[0]}</div>
                {us.username}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default User;
