import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./ItemStyles.js";

const Main = () => {
  const classes = useStyles();
  return (
    <main>
      <h2>Menu</h2>
      <Link to="/getitem">
        <input className={classes.inputSubmit} type="button" value="Get All" />
      </Link>

      <Link to="/postitem">
        <input className={classes.inputSubmit} type="button" value="Add Item" />
      </Link>
      <Link to="/deleteitem">
        <input className={classes.inputSubmit} type="button" value="Delete Item" />
      </Link>
    </main>
  );
};

export default Main;
