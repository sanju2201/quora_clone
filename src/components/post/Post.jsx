import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "./post.scss";
import { Button, Input } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectQuestionId,
  selectQuestionName,
  setQuestionInfo,
} from "../../features/questionSlice";

const Post = ({ id, image, question, timestamp, quoraUser }) => {
  const [openModal, setOpenModal] = useState(false);
  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();
  const questionId = useSelector(selectQuestionId);

  const questionName = useSelector(selectQuestionName);

  const handleAddAnswer = (e) => {
    e.preventDefault();
    if (questionId) {
    }
  };

  return (
    <div
      className="post"
      onClick={() =>
        dispatch(setQuestionInfo({ questionId: id, questionName: question }))
      }
    >
      <div className="post_info">
        <Avatar src={quoraUser.photo} />
        <h4>
          {quoraUser.displayName ? quoraUser.displayName : quoraUser.email}
        </h4>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
      <div className="post_body">
        <div className="post_question">
          <p>{question}</p>
          <Button className="post_btnAnswer" onClick={() => setOpenModal(true)}>
            Answer
          </Button>
          <Modal
            isOpen={openModal}
            ariaHideApp={false}
            onRequestClose={() => setOpenModal(false)}
            shouldCloseOnOverlayClick={false}
          >
            <div className="modal__question">
              <h1>{question}</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {quoraUser.displayName
                    ? quoraUser.displayName
                    : quoraUser.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                required
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer Here"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setOpenModal(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAddAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        <div className="post_answer">
          <p></p>
        </div>
        <img src={image} alt="post" />
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
