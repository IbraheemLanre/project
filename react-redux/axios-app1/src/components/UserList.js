import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
// import baseInstance from '../api'
import "./UserStyles.js";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  //   const [userName, setUserName] = useState("");
  //   const [userRole, setUserRole] = useState("");

  const getAllUsers = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res.data);
        const { data } = res.data;
        setUserData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div>
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div>
        <form onSubmit="">
          <label htmlFor="name">First name:</label>
          <br />
          <input type="text" id="name" name="fname" value="" onChange="" />
          <br />
          <label htmlFor="role">Role:</label>
          <br />
          <input type="text" id="role" name="role" value="" onChange="" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div> */}
    </>
  );
};

export default UserList;
