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
    isEdit: false
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
      id: uuidv4()
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
    console.log("handleEdit is called !!!" + id);
    const item = this.state.todos.find(item => item.id === id);
    console.log(item);
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
