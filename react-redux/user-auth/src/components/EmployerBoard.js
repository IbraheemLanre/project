import React from "react";
import getEmployerBoard from "../services/auth.service";

const EmployerBoard = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    getEmployeeBoard()
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => {
        const content =
          (err.res && err.res.data && err.res.data.message) ||
          err.message ||
          err.toString();
        setContent(content);
      });
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        {" "}
        <h3>{content}</h3>{" "}
      </header>
    </div>
  );
};

export default EmployerBoard;
