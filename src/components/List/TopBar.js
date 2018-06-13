import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>Marta</h2>
        <h5>Ultimo accesso alle 11.40 </h5>
      </div>
    );
  }
}

export default TopBar;
