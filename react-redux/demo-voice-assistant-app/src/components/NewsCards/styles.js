import { makeStyles } from "@material-ui/core";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "65vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
    fontSize: "10",
  },

  infoCard: {
    display: "flex",
    // justifyItems: "center",
    flexDirection: "column",
    textAlign: "center",
    // alignItems: "center",
  },
});
