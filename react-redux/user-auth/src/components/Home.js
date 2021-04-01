import React, { useEffect, useState } from "react";
import getAll from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    getAll()
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        const content =
          (error.response && error.response.data) || error.message || error.toString();
        setContent(content);
      });
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;
