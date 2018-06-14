import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    console.log(this.props);
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
        <div>
          <ul>
            {this.props.messages !== [] && this.props.logged === true
              ? this.props.messages.map(el => {
                  console.log(this.props.messages);
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
