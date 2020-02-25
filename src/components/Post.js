import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    marginBottom: 20
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
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.image}
        component="img"
        image={props.userImage}
        title="Profile image"

      />
      <CardContent className={classes.content}>
        <Typography variant="h5">{props.userHandle}</Typography>
        <Typography variant="body2" color="textSecondary">
          {props.createdAt}
        </Typography>
        <Typography variant="body1">{props.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
