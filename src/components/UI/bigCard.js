import React from "react";
import "./bigCard.css";

const BigCard = ({ url }) => {
  return (
    <div className="bigCard-container">
      <img className="bigCard-image" src={url} alt="tabbed-card" />
    </div>
  );
};

export default BigCard;
