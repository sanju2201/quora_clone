import React from "react";
import "./navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, Button } from "@mui/material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/768px-Quora_logo_2015.svg.png?20170609154433"
          alt="logo"
        />
      </div>
      <div className="navbar_icons">
        <div className="navbar_icon">
          <HomeIcon />
        </div>
        <div className="navbar_icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="navbar_icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className="navbar_icon">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="navbar_icon">
          <NotificationsNoneOutlinedIcon />
        </div>
      </div>
      <div className="navbar_input">
        <SearchOutlinedIcon />
        <input type={"text"} placeholder="Search Quora" />
      </div>
      <div className="navbar_right">
        <div className="navbar_avatar">
          <Avatar />
        </div>
        <LanguageOutlinedIcon />
        <Button>Add Question</Button>
      </div>
    </div>
  );
};

export default Navbar;
