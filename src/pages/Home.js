import React, { useEffect, useState } from "react";

import axios from "axios";

import Post from "../components/Post";

import Grid from "@material-ui/core/Grid";

const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    console.log("effect");
    axios
      .get("https://europe-west1-instaclone-411ad.cloudfunctions.net/api/posts")
      .then(response => {
        console.log("promise fulfilled");
        setPosts(response.data);
        console.log(response.data);
      });
  }, []);

  let recentPosts = posts ? (
    posts.map(post => <Post key={post.postId} {...post} />)
  ) : (
    <p>No posts</p>
  );

  return (
    <div>
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentPosts}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
