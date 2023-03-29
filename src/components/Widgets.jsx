import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4> {heading} </h4>
        <p>{subtitle} </p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedInNews</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is Sleek", "Top Developer News - 8670 readers")}
      {newsArticle(
        "The Bad , the Good and The Ugly of ChatGPT",
        "#trending - 670 readers"
      )}
      {newsArticle(
        "How to get an entry level role as a developer",
        "Career - 1350 readers"
      )}
      {newsArticle(
        "Techstars of the 21st century",
        "Top Developer News - 250 readers"
      )}
      {newsArticle(
        "Will AI take your job?",
        "Top Developer News - 7545 readers"
      )}
    </div>
  );
};

export default Widgets;
