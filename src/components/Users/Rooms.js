import React, { Component } from 'react';

class Rooms extends Component {
  state = {
    clicked: false
  };
  render() {
    return (
      <div className="Rooms">
        <div className="RoomTitle">
          <h2 style={{ color: 'white', fontWeight: 'lighter' }}>ROOMS</h2>
          <a onClick={() => this.setState({ clicked: !this.state.clicked })}>
            <i className="fa fa-plus" style={{ color: 'white' }} />
          </a>
        </div>
        {this.props.rooms !== undefined
          ? this.props.rooms.map(room => {
              console.log(this.props.rooms);
              return (
                <div className="room" style={{ color: 'white' }}>
                  <div className="fotoRoom" />
                  {room.name}
                </div>
              );
            })
          : ''}
        {this.state.clicked === true ? (
          <form onSubmit={this.props.onSubmit}>
            <input type="text" onChange={this.props.onChange} />
          </form>
        ) : (
          ''
        )}

        <p>{this.props.roomName}</p>
      </div>
    );
  }
}

export default Rooms;
