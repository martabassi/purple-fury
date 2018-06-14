import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <h2
          style={{
            color: '#FFF',
            fontWeight: 'lighter',
            paddingBottom: '10px'
          }}
        >
          TODO/NOTES
        </h2>
        <hr />
        <div>
          <ul>
            {this.props.messages !== [] && this.props.logged === true
              ? this.props.messages.map(el => {
                  return <li>{el.username}</li>;
                })
              : ''}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
