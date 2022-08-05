import React, { useEffect, useState } from "react";
import "./card.css";
// import { useState } from "react";
// import dealsSide from "./../../images/dealsSide.webp";

const Card = ({ url, name, offer, caption, buttonClicked }) => {
  const [cl, setCl] = useState("");

  useEffect(() => {
    if (cl === "visible" || cl === "hidden") {
      setCl("");
    }

    console.log(buttonClicked);
    if (buttonClicked === "right") {
      setCl("visible");
    }
    if (buttonClicked === "left") {
      setCl("hidden");
    }
  }, [buttonClicked, cl]);

  return (
    <div className={`card-container ${cl} `}>
      <img src={url} alt="dealSide" />
      <p className="card-name">{name}</p>
      <p className="card-offer"> {offer}</p>
      <p className="card-caption">{caption}</p>
    </div>
  );
};

export default Card;
