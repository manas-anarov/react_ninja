import React, { Component } from 'react';
import Todos from './Todos'


class AddTodo extends Component {
  state = {
   content:''
  }
  handleChange = (e) => {

    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addTodo(this.state)
  }


  render() {
    return (
      <div className="todo-app container">
        <form onSubmit={this.handleSubmit}>
        	<label>Add new todo:</label>
        	<input type="text" onChange={this.handleChange} value={this.state.content}></input>
        </form>
      </div>
    );
  }
}

export default AddTodo;