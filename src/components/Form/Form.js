import React, { Component } from 'react';
import Message from './Message';
class Form extends Component {
  render() {
    let notifiedUser;
    notifiedUser = this.props.user.map(el => {
      this.props.value === `@${el.username}` ? console.log('DEGRADO') : null;
    });

    return (
      <React.Fragment>
        <Message notified={notifiedUser} />
        <form onSubmit={this.props.onClick} className={this.props.className}>
          <input
            onChange={this.props.onChange}
            value={this.props.value}
            name="message"
            autocomplete="off"
          />
          <button onClick={this.props.onClick}>Send</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
