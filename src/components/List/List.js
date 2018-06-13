import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <ul id="messages" />
      </div>
    );
  }
}

export default List;
