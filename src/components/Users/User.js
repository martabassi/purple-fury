import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <ul>
        {this.props.listUsers.map((username, i) => {
          return (
            <li key={i}>
              {/* <img src='https://www.guadagna.net/avatars/marcolinux.gif?dateline=1430342107'
                className='imgShr' /> */}
              {username}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default User;
