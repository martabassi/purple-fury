import React, { Component } from 'react';

class List extends Component {
  componentDidUpdate() {
    const heightScroll = document.querySelector('.List').scrollHeight;
    document.querySelector('.List').scrollTop = heightScroll;
  }
  render() {
    return (
      <div className={this.props.className}>
        <ul>
          {this.props.messages.map(message => {
            return (
              <li className="messaggio" key={message._id}>
                <strong>
                  {message.username === this.props.username
                    ? 'Me'
                    : message.username}
                </strong>: {message.message}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
