import React from "react";

import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2),
    width: "100%",
    border: "1px solid",
    borderColor: "#dbdbdb",
    boxShadow: "none"
  },
  image: {
    objectFit: "cover"
  },
  content: {
    margin: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

const Post = props => {
  const classes = useStyles();

  dayjs.extend(relativeTime);
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            className={classes.avatar}
            alt="userImage"
            src={props.userImage}
          />
        }
        title={
          <Typography
            component={Link}
            to={`/users/${props.userHandle}`}
            variant="h6"
            color="textPrimary"
          >
            {props.userHandle}
          </Typography>
        }
        subheader={dayjs(props.createdAt).fromNow()}
      ></CardHeader>
      <CardMedia
        className={classes.image}
        component="img"
        image={props.userImage}
        title="Profile image"
      />
      <CardContent className={classes.content}>
        <Typography variant="body1">
          {props.likeCount === 1 ? "1 like" : `${props.likeCount} likes`}
        </Typography>
        <Typography variant="body1">{props.body}</Typography>
        <Typography variant="body1">Comments here</Typography>
        <Divider variant="fullWidth" />
        <Typography variant="body1">Add a comment</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
