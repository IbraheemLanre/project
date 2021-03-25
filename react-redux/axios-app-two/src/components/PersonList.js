import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { StyledTableCell, StyledTableRow, useStyles } from "./PersonStyles.js";

const PersonList = () => {
  const [persons, setPersons] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const persons = res.data;
        console.log(persons);
        setPersons(persons);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={classes.userTable}>
        <h1 className={classes.title}>Person List</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>PersonId</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Company</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>Website</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {persons.map((person) => (
                <StyledTableRow key={person.id}>
                  <StyledTableCell>{person.id}</StyledTableCell>
                  <StyledTableCell>{person.name}</StyledTableCell>
                  <StyledTableCell>
                    {person.address.street} {person.address.suite}{" "}
                    {person.address.zipcode} {person.address.city}
                  </StyledTableCell>
                  <StyledTableCell>{person.company.name}</StyledTableCell>
                  <StyledTableCell>{person.email}</StyledTableCell>
                  <StyledTableCell>{person.phone}</StyledTableCell>
                  <StyledTableCell>{person.website}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default PersonList;
