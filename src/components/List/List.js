import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.messages.map(message => {
          return (
            <div className="messaggio" key={message._id}>
              {message.username}: {message.message}
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
