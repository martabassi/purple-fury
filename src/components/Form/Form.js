import React, { Component } from 'react';
import openSocket from 'socket.io-client';

class Form extends Component {
  render() {
    return (
      <form action="" className={this.props.className}>
        <input onChange={this.onChange} name="message" autocomplete="off" />
        <button onClick={this.onSubmit}>Send</button>
      </form>
    );
  }
}

export default Form;
