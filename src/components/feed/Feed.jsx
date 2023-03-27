import React from "react";
import Post from "../post/Post";
import QueryBox from "../queryBox/QueryBox";
import "./feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <QueryBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
