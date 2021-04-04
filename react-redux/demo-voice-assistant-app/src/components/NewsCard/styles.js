import { makeStyles } from "@material-ui/core";

export default makeStyles({
  container: {
    width: "100%",
    height: "400px",
    margin: "10px auto",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "2px 5px 91px 9px #d1d1d1",
    background: "#fff",
  },

  headingTitle: {
    color: "#555",
    fontWeight: "bolder",
    marginTop: 0,
    textAlign: "center",
  },

  news: {
    height: "17rem",
    border: "1px solid black",
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1470350576089-539d5a852bf7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d66754099ebbd69321b5a891e222302&auto=format&fit=crop&w=1050&q=80" +
      ")",
    backgroundSize: "contain",
    backgroundColor: "#000",
    borderRadius: "15px",
    opacity: "0.9",
    color: "#fff",
    paddingTop: "8rem",
    paddingLeft: "2rem",
    marginBottom: "3rem",
    boxSizing: "border-box",
    boxShadow: "0px 15px 31px -7px #333",
  },
  hr: {
    width: "80%",
    float: "left",
    margin: "5px 0",
  },

  p: {
    marginTop: 0,
    color: "#f1f1f1",
  },

  media: {
    height: 250,
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
  },
  activeCard: {
    borderBottom: "10px solid #22289a",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
