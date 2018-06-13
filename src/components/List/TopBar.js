import React, { Component } from 'react';
import moment from 'moment';

class TopBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>{this.props.username}</h2>
        <h5>Last access {moment().format('MMMM Do YYYY, h:mm:ss a')} </h5>
      </div>
    );
  }
}

export default TopBar;
