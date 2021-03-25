import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
// import baseInstance from '../api'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { StyledTableCell, StyledTableRow, useStyles } from "./UserStyles.js";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  //   const [userName, setUserName] = useState("");
  //   const [userRole, setUserRole] = useState("");
  const classes = useStyles();
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
      <div className={classes.userTable}>
        <h1 className={classes.title}>User List</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>UserId</StyledTableCell>
                <StyledTableCell>Firstname</StyledTableCell>
                <StyledTableCell>Lastname</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell>{user.id}</StyledTableCell>
                  <StyledTableCell>{user.first_name}</StyledTableCell>
                  <StyledTableCell>{user.last_name}</StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
