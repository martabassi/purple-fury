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
          {this.props.user.map(us => {
            console.log(us.isConnected);
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
          })}
        </ul>
      </div>
    );
  }
}

export default User;
