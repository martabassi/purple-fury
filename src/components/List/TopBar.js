import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

class TopBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div>
          <h2>{this.props.username}</h2>
          <h5>Last access {moment().format('MMMM Do YYYY, h:mm:ss a')} </h5>
        </div>
        <Link to="/">
          <i className="fa fa-sign-out-alt" />
        </Link>
      </div>
    );
  }
}

export default TopBar;
