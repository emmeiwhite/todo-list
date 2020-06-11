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

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.item,
      id: this.state.id
    };

    this.setState({
      item: '',
      todos: [...this.state.todos, newItem],
    });

  }

  handleChange = (e) => {
    console.log("handleChange is called !!!");
    this.setState({
      item: e.target.value
    });
  }

  handleEdit = (id) => {
    console.log("handleEdit is called !!!");
  }

  handleDelete = () => {
    this.setState({
      todos: []
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
            />

            <TodoList
              todos={todos}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
