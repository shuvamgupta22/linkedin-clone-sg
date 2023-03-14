import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("LayOffs", "XYZ company - 789 readers")}
      {newsArticle(
        "Full Stack Developments is in Demand",
        "Top News - 4597 readers"
      )}
      {newsArticle("AI is the Future?", "chatGPT is insane - 401k readers")}
      {newsArticle("Data Science", "News - 209 readers")}
    </div>
  );
}

export default Widgets;
