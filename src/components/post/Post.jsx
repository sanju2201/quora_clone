import { Avatar } from "@mui/material";
import React from "react";
import "./post.scss";
import { Button } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const Post = () => {
  return (
    <div className="post">
      <div className="post_info">
        <Avatar />
        <h5>Username</h5>
        <small>Timestamp</small>
      </div>
      <div className="post_body">
        <div className="post_question">
          <p>Question</p>
          <Button className="post_btnAnswer">Answer</Button>
        </div>
        <div className="post_answer">
          <p></p>
        </div>
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-d7c08d5d18b18b1665f0a576d7f39caf"
          alt="post"
        />
      </div>
      <div className="post_footer">
        <div className="post_footerActions">
          <div className="post_footerAction">
            <div className="upvote">
              <ThumbUpOutlinedIcon />
              <small>Upvote. {123}</small>
            </div>
            <div className="downvote">
              <ThumbDownOutlinedIcon />
            </div>
          </div>
          <div className="comment">
            <ChatBubbleOutlineOutlinedIcon />
            <small>145</small>
          </div>
          <div className="share">
            <LoopOutlinedIcon />
            <small>69</small>
          </div>
        </div>
        <div className="post_more">
          <MoreHorizOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
