import React from "react";
import "./card.css";
// import dealsSide from "./../../images/dealsSide.webp";

const Card = ({ url, name, offer, caption }) => {
  return (
    <div className="card-container">
      <img src={url} alt="dealSide" />
      <p className="card-name">{name}</p>
      <p className="card-offer"> {offer}</p>
      <p className="card-caption">{caption}</p>
    </div>
  );
};

export default Card;
