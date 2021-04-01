import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { required, checkEmail } from "./validatorFunctions";

import { login } from "../services/auth.service";

// const required = (value) => {
//   if (!value) {
//     return (
//       <p className="alert alert-danger" role="alert">
//         This field is required.
//       </p>
//     );
//   }
// };

// const checkEmail = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <p className="alert alert-danger" role="alert">
//         This email is not valid.
//       </p>
//     );
//   }
// };

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      const options = { email, password };
      login(options).then(
        () => {
          props.history.push("/profile");
          window.location.reload();
        }).catch(err=>{
                const resMessage =
                  (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                  err.message ||
                  err.toString();
                setLoading(false);
                setMessage(resMessage);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleSubmit} ref={form}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              className="form-control"
              type="text"
              name="email"
              value={email}
              onChange={emailChange}
              validations={[checkEmail, required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              className="form-control"
              type="text"
              name="password"
              value={password}
              onChange={passwordChange}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
