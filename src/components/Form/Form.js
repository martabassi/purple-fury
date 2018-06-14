import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="" className={this.props.className}>
        <input
          onChange={this.props.onChange}
          value={this.props.value}
          name="message"
          autocomplete="off"
        />
        <button onChange={this.props.onClick}>Send</button>
      </form>
    );
  }
}

export default Form;
