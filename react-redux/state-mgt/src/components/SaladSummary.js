import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    macHeight: 50,
    "& li": {
      width: 100,
    },

    wrapper: {
      border: "black solid 1px",
      display: "flex",
      padding: 25,
    },
  },
});

const SaladSummary = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h2>Your Salad</h2>
      <ul className={classes.list}>
        <li>Apple</li>
        <li>Avocade</li>
        <li>Carrots</li>
      </ul>
    </div>
  );
};

export default SaladSummary;
