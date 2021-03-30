import React from "react";
import Alert from "../Alert";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  item: {
    marginRight: 20,
  },
  wrapper: {
    borderTop: "black solid 1px",
    display: "flex",
    flexWrap: "wrap",
    "& h2": {
      width: "100%",
    },
  },
});
const CartSuccess = () => {
  const classes = useStyles();

  return (
    <Alert title="Added to Cart" type="success">
      <div className={classes.wrapper}>
        <h2>You have added 3 items</h2>
        <div className={classes.item}>
          <div>Bananas</div>
          <div>Quantity: 2</div>
        </div>
        <div className={classes.item}>
          <div>Lettuce</div>
          <div>Quantity: 1</div>
        </div>
      </div>
    </Alert>
  );
};

export default CartSuccess;
