import React, { Component } from 'react';

class Rooms extends Component {
  state = {
    clicked: false,
    searched: false
  };

  render() {
    console.log('ROOMS', this.props);
    return (
      <div className="Rooms">
        <div className="RoomTitle">
          <h2 style={{ color: 'white', fontWeight: 'lighter' }}>ROOMS</h2>
          <div className="icone">
            <a onClick={() => this.setState({ clicked: !this.state.clicked })}>
              <i className="fa fa-plus" style={{ color: 'white' }} />
            </a>
            <a
              onClick={() => this.setState({ searched: !this.state.searched })}
            >
              <i className="fa fa-search" style={{ color: 'white' }} />
            </a>
          </div>
        </div>

        {this.state.clicked === true ? (
          <form className="formRooms" onSubmit={this.props.onSubmit}>
            <input
              className="inputRooms"
              type="text"
              onChange={this.props.onChange}
            />
          </form>
        ) : (
          ''
        )}

        {this.state.searched === true ? (
          <form className="formRooms" onSubmit={this.props.onSubmit}>
            <input
              className="inputRooms"
              type="text"
              onChange={this.props.filterRooms}
            />
          </form>
        ) : (
          ''
        )}
        <div className="RoomsGroup">
          {this.props.rooms !== undefined
            ? this.props.rooms.map(room => {
                return (
                  <div className="room" style={{ color: 'white' }}>
                    <div className="fotoRoom" />
                    <a name={room.name} onClick={this.props.onClick}>
                      {room.name}
                    </a>
                  </div>
                );
              })
            : ''}
        </div>

        {/* <p>{this.props.roomName}</p> */}
      </div>
    );
  }
}

export default Rooms;
