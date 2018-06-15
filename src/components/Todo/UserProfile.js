import React, { Component } from 'react';
import styled from 'styled-components';

const UserTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 300;
    font-size: 25px;
    margin: 10px;
  }
  .fotoUser {
    width: 100px;
    height: 100px;
    font-size: 40px;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .formRooms {
    margin: 10px;
  }
  .inputRooms {
    padding: 10px 5px 20px 5px;
    display: block;
  }
  .inputRooms::placeholder {
    color: white;
    font-weight: 200;
  }
  .inputRooms:focus {
    border-bottom: 1px solid white;
    color: white;
  }
`;
class UserProfile extends Component {
  render() {
    return (
      <div>
        <UserTitle>
          <div className="fotoUser">{this.props.username[0]}</div>
          <h2>{this.props.username}</h2>
          <form className="formRooms" onSubmit={this.props.onChange}>
            <input
              className="inputRooms"
              type="text"
              placeholder="Change your username"
              name="username"
            />
          </form>
          <form className="formRooms" onSubmit={this.props.onSubmitRoom}>
            <input
              className="inputRooms"
              type="text"
              placeholder="Add Public Room"
              name="room"
              onChange={this.props.onChangeRoom}
            />
          </form>
          <form className="formRooms" onSubmit={this.props.onSubmitPrivate}>
            <input
              className="inputRooms"
              type="text"
              placeholder="Add Private Room"
              name="private"
              onChange={this.props.onChangeRoom}
            />
          </form>
        </UserTitle>
      </div>
    );
  }
}

export default UserProfile;
