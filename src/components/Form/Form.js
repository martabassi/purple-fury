import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="" className={this.props.className}>
        <input
          onBlur={this.props.onSubmit}
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
