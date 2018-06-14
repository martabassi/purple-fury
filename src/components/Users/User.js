import React, { Component } from 'react';
import classnames from 'classnames';
class User extends Component {
  render() {
    return (
      <div className="User">
        <ul className="users">
          <li className="usersList">
            <div className="fotoUser">{this.props.username[0]}</div>
            {this.props.username}
          </li>
          {this.props.selected === ''
            ? this.props.user.map(us => {
                return (
                  <li
                    className={classnames('usersList', {
                      online: us.isConnected
                    })}
                  >
                    <div className="fotoUser">{us.username[0]}</div>
                    {us.username}
                    {us.isConnected == true ? <small>online</small> : ''}
                  </li>
                );
              })
            : this.props.messages.map(user => {
                return (
                  <li className="usersList">
                    <div className="fotoUser">{user.username[0]}</div>
                    {user.username}
                  </li>
                );
              })}
        </ul>
      </div>
    );
  }
}

export default User;
