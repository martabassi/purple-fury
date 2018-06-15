import React, { Component } from 'react';
import UserProfile from './UserProfile';
import TodoListItem from './TodoListItem';
class TodoList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="TodoList">
        <h2
          style={{
            color: 'white',
            fontWeight: 'lighter',
            paddingBottom: '20px',
            fontSize: '30px',
            textAlign: 'center'
          }}
        >
          User Profile
        </h2>
        <UserProfile
          onChangeRoom={this.props.onChangeRoom}
          onSubmitPrivate={this.props.onSubmitPrivate}
          onSubmitRoom={this.props.onSubmitRoom}
          username={this.props.username}
        />
        <TodoListItem />
      </div>
    );
  }
}

export default TodoList;
