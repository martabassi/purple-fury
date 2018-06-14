import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <h2
          style={{
            color: '#636e72',
            fontWeight: 'lighter',
            paddingBottom: '10px'
          }}
        >
          TODO/NOTES
        </h2>
        <hr />
      </div>
    );
  }
}

export default TodoList;
