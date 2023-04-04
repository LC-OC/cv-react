import React from "react";
import react_icon from "../assets/react_icon.png";
import bootstrap_icon from "../assets/bootstrap_icon.svg";
import css_icon from "../assets/css_icon.svg";
import figma_icon from "../assets/figma_icon.svg";
import git_icon from "../assets/git_icon.png";
import html_icon from "../assets/html_icon.svg";
import js_icon from "../assets/js_icon.svg";
import mongo_db from "../assets/mongo_db.svg";
import sass_icon from "../assets/sass_icon.svg";
import trello_icon from "../assets/trello_icon.svg";
import visual_studio_icon from "../assets/visual_studio_icon.png";

const Languages = () => {
  return (
    <div className="informatique">
      <h2>Compétences en Informatique</h2>
      <div className="icons-container">
        <img src={html_icon} alt="" />
        <img src={css_icon} alt="" />
        <img src={js_icon} alt="" />
        <img src={sass_icon} alt="" />
        <img src={bootstrap_icon} alt="" />
        <img src={react_icon} alt="" />
        <img src={visual_studio_icon} alt="" />
        <img src={git_icon} alt="" />
        <img src={figma_icon} alt="" />
        <img src={trello_icon} alt="" />
        <img src={mongo_db} alt="" />
      </div>
    </div>
  );
};

export default Languages;
