import { React, useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/action";

const AddTodo = ({ addTodo }) => {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleAddTodo = () => {
    setState("");
    addTodo(state);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Todo Here"
        onChange={handleChange}
        value={state}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo)
