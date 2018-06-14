import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

class TopBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div>
          <div className="usersList" style={{ display: 'flex' }}>
            <div className="fotoUser">{this.props.username[0]}</div>
            <h1>{this.props.username}</h1>
          </div>
          {this.props.messages !== '' ? (
            <h2>Current Room: {this.props.messages}</h2>
          ) : (
            ''
          )}

          <h5
            style={{
              fontWeight: '300',
              fontFamily: 'Montserrat',
              fontSize: '13px'
            }}
          >
            {moment().format('MMMM Do YYYY, h:mm:ss a')}{' '}
          </h5>
        </div>

        <Link to="/">
          <i className="fa fa-sign-out-alt" onClick={this.props.onClick} />
        </Link>
      </div>
    );
  }
}

export default TopBar;
