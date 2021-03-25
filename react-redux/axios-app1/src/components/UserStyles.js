import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },

  title: {
    textAlign: "center",
  },

  userTable: {
    padding: "20px",
  },

  inputData: {
    width: "20rem",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },

  inputSubmit: {
    width: "10rem",
    backgroundColor: "#275096",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#1c59bf",
    },
  },

  formContainer: {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "20px",
  },
});

export { StyledTableCell, StyledTableRow, useStyles };
