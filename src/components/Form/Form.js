import React, { Component } from 'react';
import Message from './Message';
class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onClick} className={this.props.className}>
          <input
            onChange={this.props.onChange}
            value={this.props.value}
            name="message"
            autocomplete="off"
            onBlur={this.props.findHashtag}
          />
          <button onClick={this.props.onClick}>Send</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
