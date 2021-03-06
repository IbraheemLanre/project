import React from "react";
import { getCurrentUser } from "../services/auth.service";

const Profile = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser}</strong>
        </h3>
      </header>
      <p>
        <strong>Token:</strong>
        {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong>
        {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong>
        {currentUser.email}
      </p>
      <strong>Role:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
