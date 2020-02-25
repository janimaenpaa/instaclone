import React, { useState, useEffect } from "react";

import axios from "axios";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  card: {
    display: "flex",
    marginBottom: 20,
    border: "1px solid",
    borderColor: "#dbdbdb",
    boxShadow: "none",
    textAlign: "center",
    justifyContent: "center",
    width: "400px"
  },
  image: {
    width: "auto",
    maxHeight: 150
  },
  textField: {
    margin: "10px auto auto 10px"
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  },
  content: {
    padding: 10
  }
});

const Login = props => {
  const { errors, loading } = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
    loading: false,
    errors: {}
  });

  const classes = useStyles();

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user.email);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser({ ...user, loading: true });
    console.log(user);

    const userData = {
      email: user.email,
      password: user.password
    };
    axios
      .post(
        "https://europe-west1-instaclone-411ad.cloudfunctions.net/api/login",
        userData
      )
      .then(response => {
        console.log(response.data);
        setUser({ ...user, loading: false });
        props.history.push("/");
      })
      .catch(err => {
        setUser({ ...user, errors: err.data, loading: false });
      });
  };

  return (
    <Card className={classes.card}>
      <div className="content">
        <Typography variant="h2">Login</Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            helperText={errors.email}
            error={errors.email ? true : false}
            value={user.email}
            onChange={handleChange}
            fullWidth
          />
          <br />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            helperText={errors.password}
            error={errors.password ? true : false}
            value={user.password}
            onChange={handleChange}
            fullWidth
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default Login;
