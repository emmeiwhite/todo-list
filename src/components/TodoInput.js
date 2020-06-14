import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.todoInput = React.createRef();
  }

  componentDidUpdate() {
    this.props.isInputFocused && this.todoInput.current.focus();
  }

  render() {
    const { handleSubmit, handleChange, todoItem, editItem, isInputFocused } = this.props;
    return (
      <React.Fragment>
        <h3 className="p-0 m-0">Todo Item</h3>
        <form className="card p-4 shadow" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="todoItem">
                <i className="fas fa-shopping-cart" aria-hidden="true"></i>
              </label>
            </div>

            <input
              type="text" className="form-control"
              required placeholder="Todo Item" id="todoItem"
              onChange={handleChange}
              value={todoItem}
              autoFocus={isInputFocused}
              ref={this.todoInput}
            />
          </div>

          <button className={editItem ? 'btn  btn-block btn-info text-white' : 'btn  btn-block btn-primary'} type="submit">add item</button>
        </form>
      </React.Fragment >
    )
  }
}


export default TodoInput;