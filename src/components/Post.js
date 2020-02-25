import React from "react";

import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    marginBottom: 20,
    border: "1px solid",
    borderColor: "#dbdbdb",
    boxShadow: "none"
  },
  image: {
    width: "auto",
    maxHeight: 150
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
});

const Post = props => {
  const classes = useStyles();

  dayjs.extend(relativeTime)
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.image}
        component="img"
        image={props.userImage}
        title="Profile image"
      />
      <CardContent className={classes.content}>
        <Typography variant="h5" component={Link} to={`/users/${props.userHandle}`} color="primary" >{props.userHandle}</Typography>
        <Typography variant="body2" color="textSecondary">
          {dayjs(props.createdAt).fromNow()}
        </Typography>
        <Typography variant="body1">{props.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
