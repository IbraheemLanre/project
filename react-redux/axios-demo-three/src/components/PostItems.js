import React, { useEffect, useState, useRef } from "react";
import { postItem } from "../storage/dataStorageLayer";
import { useStyles } from "./ItemStyles.js";

const PostItems = () => {
  const [newItem, setNewItem] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const mounted = useRef(true);

  const classes = useStyles();

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        if (mounted.current) setShowAlert(false);
      }, 1000);
    }
  }, [showAlert]);

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postItem(newItem).then(() => {
      if (mounted.current) {
        setNewItem("");
        setShowAlert(true);
      }
    });
  };

  return (
    <div className={classes.formContainer}>
      <h2>Post New Item</h2>
      {showAlert && <h2>Submit Successful</h2>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item</label>
        <br />
        <input
          className={classes.inputData}
          type="text"
          name="item"
          id="item"
          value={newItem}
          onChange={handleChange}
        />
        <br />
        <input className={classes.inputSubmit} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostItems;
