import React from "react";
import Alert from "./components/Alert";
import CartSuccess from "./components/CartSuccess/CartSuccess";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1>Hello world</h1>
      <Alert title="Items Not Added" type="error">
        <div>Items are out of stock.</div>
      </Alert>
      <CartSuccess />
    </div>
  );
};

export default App;
