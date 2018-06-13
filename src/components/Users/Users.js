import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <div className={this.props.className}>

          <div className="users" >          
          <div className="fotoUser">
          </div>
          Marta
          </div>
      
          <div className="users" >    
          <div className="fotoUser">
          </div>
          Katia
          </div>

          <div className="users" >          
          <div className="fotoUser">
          </div>
          Vincenzo
          </div>
      </div>
    );
  }
}

export default Users;
