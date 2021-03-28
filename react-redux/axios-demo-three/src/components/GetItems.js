import React, { useState, useEffect, useRef } from "react";
import { getList } from "../storage/dataStorageLayer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { StyledTableCell, StyledTableRow, useStyles } from "./ItemStyles.js";
import {Link} from "react-router-dom";

const GetItems = () => {
  const [lists, setLists] = useState([]);
  const showAlert = false;
  const mounted = useRef(true);

  const classes = useStyles();

  useEffect(() => {
    mounted.current = true;
    if (lists.length && !showAlert) {
      return;
    }
    getList().then((groceryItems) => {
      if (mounted.current) {
        setLists(groceryItems);
      }
    });
    return () => (mounted.current = false);
  }, [showAlert, lists]);

  return (
    <div className={classes.itemTable}>
      <h1 className={classes.title}>Grocery Items</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ItemId</StyledTableCell>
              <StyledTableCell>Item</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lists.map((list) => (
              <StyledTableRow key={list.id}>
                <StyledTableCell>{list.id}</StyledTableCell>
                <StyledTableCell>{list.item}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/">
        <input className={classes.inputSubmit} type="button" value="Menu" />
      </Link>
    </div>

  );
};

export default GetItems;
