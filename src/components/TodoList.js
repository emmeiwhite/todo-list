import React, { Component } from 'react';
import List from './List';

class TodoList extends Component {

  render() {
    const { todos, handleDelete } = this.props;
    return (
      <ul className="list-group mt-4">
        <h3>Todo List</h3>
        {
          todos.length > 0 && todos.map((todo => <List key={todo.id} id={todo.id} name={todo.name} />))
        }

        <button className="btn-danger btn-block form-control" onClick={handleDelete}>delete list</button>
      </ul>
    )
  }
}

export default TodoList;