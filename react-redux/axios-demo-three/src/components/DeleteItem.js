import React, { useEffect, useState } from "react";
import { deleteItem } from "../storage/dataStorageLayer";
import { useStyles } from "./ItemStyles.js";
import { Link } from "react-router-dom";

const DeleteItem = () => {
  const classes = useStyles();
  const [id, setId] = useState("");
  const [showAlert, SetShowAlert] = useState(false);

  const handleClick = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => SetShowAlert(false), 1000);
    }
  }, [showAlert]);

  const handleSubmit = (e) => {
    e.preventDefault();
    SetShowAlert(true);
    deleteItem(id).then(setId(""));
  };

  return (
    <div className={classes.formContainer}>
      <h2>Delete An Item</h2>
      {showAlert && <h2>Delete Successful</h2>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <br />
        <input
          className={classes.inputData}
          type="text"
          name="id"
          id="id"
          value={id}
          onChange={handleClick}
        />{" "}
        <br />
        <input className={classes.inputSubmit} type="submit" value="Delete" />
      </form>
      <Link to="/">
        <input className={classes.inputSubmit} type="button" value="Menu" />
      </Link>
    </div>
  );
};

export default DeleteItem;
