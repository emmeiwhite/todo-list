import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    const { handleSubmit, handleChange } = this.props;
    return (
      <React.Fragment>
        <h3 className="p-0 m-0">Todo Item</h3>
        <form className="card p-4" onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label className="input-group-text" htmlFor="todoItem">
                <i className="fas fa-shopping-cart" aria-hidden="true"></i>
              </label>
            </div>
            <input type="text" class="form-control" placeholder="Todo Item" id="todoItem"
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary btn-block">add item</button>
        </form>
      </React.Fragment>
    )
  }
}


export default TodoInput;