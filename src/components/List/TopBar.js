import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>{this.props.username}</h2>
      </div>
    );
  }
}

export default TopBar;
