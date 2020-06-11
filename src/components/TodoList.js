import React, { Component } from 'react';
import List from './List';

class TodoList extends Component {

  render() {
    const { todos } = this.props;
    return (
      <ul className="list-group mt-4">
        <h3>Todo List</h3>
        {
          todos.length > 0 && <List />
        }
      </ul>
    )
  }
}

export default TodoList;