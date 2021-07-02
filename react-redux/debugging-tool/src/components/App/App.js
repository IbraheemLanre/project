import React, { createContext, useState } from "react";
import TextInformation from "../TextInformation/TextInformation";
import "./App.css";

export const TextContext = createContext();
TextContext.displayName = "TextContext";

const App = () => {
  const [text, setText] = useState("");

  return (
    <TextContext.Provider value={text}>
      <div className="wrapper">
        <label htmlFor="text">
          Add Your Text Here:
          <br />
          <textarea
            name="text"
            id="text"
            cols="100"
            rows="10"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </label>
        <TextInformation />
      </div>
    </TextContext.Provider>
  );
};

export default App;
