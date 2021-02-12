import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  updateInput = (e) => {
    e.preventDefault();
    this.setState({
      input: e.target.value,
    });
  };

  handleAddTodo = () => {
    //dispatches actions to add todo
    //sets stateback to empty string
  };

  render() {
    return (
      <div>
        <input onChange={this.updateInput} value={this.state.input} />
        <button className="add-todo" onClick={this.handleAddTodo}></button>
      </div>
    );
  }
}

export default AddTodo