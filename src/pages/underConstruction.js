import React from "react";
import "./underConstruction.css";
import c from "./../images/c.jpg";
import { useHistory } from "react-router-dom";

const UnderConstruction = () => {
  const history = useHistory();
  return (
    <>
      <div className="uc-container">
        <img
          src={c}
          style={{
            width: "70%",
            height: "20%",
            margin: "-50px auto",
          }}
          alt="construction"
        />
        <button className="uc-btn" onClick={() => history.replace("/home")}>
          Go Back
        </button>
      </div>
    </>
  );
};

export default UnderConstruction;
