import { Avatar } from "@mui/material";
import React from "react";
import "./queryBox.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const QueryBox = () => {
  const user = useSelector(selectUser);
  return (
    <div className="queryBox">
      <div className="queryBox_info">
        <Avatar src={user.photo} />
        <h5>{user.displayName}</h5>
      </div>
      <div className="queryBox_quora">
        <p>What do you you want to ask or share?</p>
      </div>
    </div>
  );
};

export default QueryBox;
