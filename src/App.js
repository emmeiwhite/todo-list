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
    item: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit is called !!!");
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
    console.log("handleDelete is called !!!")
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
