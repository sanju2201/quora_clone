import { Avatar } from "@mui/material";
import React from "react";
import "./queryBox.scss";

const QueryBox = () => {
  return (
    <div className="queryBox">
      <div className="queryBox_info">
        <Avatar />
        <h5>Username</h5>
      </div>
      <div className="queryBox_quora">
        <p>What do you you want to ask or share?</p>
      </div>
    </div>
  );
};

export default QueryBox;
