import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <h2>Menu</h2>
      <Link to="/getitem">
        <button>Get All</button>
      </Link>
      <Link to="/postitem">
        <button>Add Item</button>
      </Link>
    </main>
  );
};

export default Main;
