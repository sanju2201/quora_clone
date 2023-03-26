import React from "react";
import "./quora.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../feed/Feed";
import Widget from "../widget/Widget";

function Quora() {
  return (
    <div className="quora">
      <Navbar />
      <div className="quora_content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Quora;
