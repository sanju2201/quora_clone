import React, { useState } from "react";
import "./navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, Button, Input } from "@mui/material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth, signOut, db } from "../auth/firebase";
import Modal from "react-modal";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import {
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  collection,
} from "firebase/firestore";

const Navbar = () => {
  const user = useSelector(selectUser);
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    setOpenModal(false);

    const data = {
      question: input,
      imageUrl: inputUrl,
      timestamp: serverTimestamp(),
      user: user,
    };
    const newQuestionRef = doc(collection(db, "questions"));

    await setDoc(newQuestionRef, data);

    setInput("");
    setInputUrl("");
  };
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
          <Avatar onClick={() => signOut(auth)} src={user.photo} />
        </div>
        <LanguageOutlinedIcon />
        <Button onClick={() => setOpenModal(true)}>Add Question</Button>
        <Modal
          isOpen={openModal}
          ariaHideApp={false}
          onRequestClose={() => setOpenModal(false)}
          shouldCloseOnOverlayClick={false}
        >
          <div className="modal_title">
            <div className="headings">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal_info">
              <Avatar className="avatar" src={user.photo} />
              <p>{user.displayName ? user.displayName : user.email} asked</p>
              <div className="modal_scope">
                <PeopleAltOutlinedIcon />
                <p>public</p>
                <ExpandMoreOutlinedIcon />
              </div>
            </div>
            <div className="modal_field">
              <Input
                type="text"
                value={input}
                required
                onChange={(e) => setInput(e.target.value)}
                placeholder="Start your question with 'what', 'How', 'Why' etc."
              />

              <div className="modal_fieldLink">
                <LinkOutlinedIcon />
                <Input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="Optional: include a link that give context"
                />
              </div>
            </div>
            <div className="modal_buttons">
              <button className="cancle" onClick={() => setOpenModal(false)}>
                Close
              </button>
              <button type="submit" className="add" onClick={handleAddQuestion}>
                Add Question
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
