import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#ffffff",
    borderBottom: "1px solid",
    borderBottomColor: "#dbdbdb",
    color: "black",
    boxShadow: "none",
  },
  appName: {
    fontSize: "2.5rem"
  },
  links: {
    marginLeft: 20
  }
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography
          className={classes.appName}
          component={Link}
          to="/"
          variant="h2"
        >
          instaclone
        </Typography>
        <div className={classes.links}>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
