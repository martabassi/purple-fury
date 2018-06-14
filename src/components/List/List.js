import React, { Component } from 'react';
import classnames from 'classnames';
class List extends Component {
  componentDidUpdate() {
    const heightScroll = document.querySelector('.List').scrollHeight;
    document.querySelector('.List').scrollTop = heightScroll;
  }

  render() {
    console.log(
      'CICCIAAAAAAAAAAAA',
      this.props.roomClicked,
      this.props.messages
    );
    return (
      <div className={this.props.className}>
        <ul>
          {this.props.messages.map(message => {
            return message.room === this.props.roomClicked ? (
              <li
                className={classnames('messaggio', {
                  notme: message.username !== this.props.username
                })}
                key={message._id}
              >
                <strong>
                  {message.username === this.props.username
                    ? 'Me'
                    : message.username}
                </strong>: {message.message}
              </li>
            ) : null;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
