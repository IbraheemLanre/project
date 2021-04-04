import React from "react";
import useStyles from '../NewsCard/styles'

const Header = () => {
    const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1 className={classes.headingTitle}>Smart Voice News</h1>
      <div className={classes.news}>
        <h2 className={classes.smart}>The advancement of smart technology</h2>
        <hr />
        <br />
      </div>
    </div>
  );
};

export default Header;
