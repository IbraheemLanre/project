import { React, useEffect, useRef, useState } from "react";
import "./App.css";
import { getList, postItem } from "../src/services/list";

function App() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [alert, setAlert] = useState(false);
  let mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (list.length && !alert) {
      return;
    }
    getList().then((items) => {
      if (mounted.current) {
        setList(items);
      }
    });
    return () => (mounted.current = false);
  }, [alert, list]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (mounted.current) {
          setAlert(false);
        }
      }, 1000);
    }
  }, [alert]);

  const handleSubmit = (e) => {
    e.preventDefault();
    postItem(newItem).then(() => {
      if (mounted.current) {
        setNewItem("");
        setAlert(true);
      }
    });
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Add Item Here</label>
        <input
          type="text"
          id="item"
          name="item"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button type="submit">Sumbit</button>
      </form>
      {alert && <h2>Submit Successful</h2>}
      <h1>My Grocery List</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
      </div>
)
}

export default App;
