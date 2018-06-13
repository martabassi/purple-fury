import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <ul>
          {this.props.messages.map(message => {
            return (
              <li key={message._id}>
                {message.username}: {message.message}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
