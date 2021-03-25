import React, { useState } from "react";
import axios from "axios";

import { useStyles } from "./PersonStyles.js";

const PostPerson = () => {
  const [name, setName] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", { name: name })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div className={classes.formContainer}>
      <h2>Post Person</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          className={classes.inputData}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <br />
        <input className={classes.inputSubmit} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostPerson;
