import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// Libraries and Stuff !!!
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  state = {
    todos: [],
    item: '',
    id: uuidv4(),
    editItem: false,
    isInputFocused: false
  };

  /* --- Form Submit --- */
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.item,
      id: this.state.id
    };

    this.setState({
      item: '',
      todos: [...this.state.todos, newItem],
      id: uuidv4(),
      editItem: false
    });

  }

  /** --- handleChange --- */
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  }

  /**  --- handleDelete of particular item --- */
  handleDeleteItem = (id) => {
    const filteredTodos = this.state.todos.filter(item => item.id !== id);
    this.setState({
      todos: filteredTodos
    })
  }

  /** --- delete all todos --- */
  handleDelete = () => {
    this.setState({
      todos: []
    })
  }

  /** --- to handle editing of the todo --- */
  handleEdit = (id) => {
    const filteredTodos = this.state.todos.filter(item => item.id !== id);
    const selectedItem = this.state.todos.find(item => item.id === id);

    this.setState({
      isInputFocused: true,
      todos: filteredTodos,
      item: selectedItem.name,
      id: id,
      editItem: true
    })
  }


  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 text-center  col-md-8  m-auto">
            <TodoInput
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              todoItem={this.state.item}
              editItem={this.state.editItem}
              isInputFocused={this.state.isInputFocused}
            />

            <TodoList
              todos={todos}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              handleDeleteItem={this.handleDeleteItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
