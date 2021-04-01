import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { required, checkEmail } from "./validatorFunctions";

import { register } from "../services/auth.service";

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      const options = { email, password, role };
      register(options)
        .then((response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        })
        .catch((err) => {
          const resMessage =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();

          setMessage(resMessage);
          setSuccessful(false);
        });
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
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  validations={[checkEmail, required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="text"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <Input
                  type="text"
                  className="form-control"
                  name="role"
                  value={role}
                  onChange={handleRoleChange}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}
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

export default Register;
