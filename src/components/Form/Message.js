import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.notified}</h2>
      </div>
    );
  }
}

export default Message;
