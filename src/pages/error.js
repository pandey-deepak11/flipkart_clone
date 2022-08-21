import React from "react";
import "./error.css";
import errorPage from "./../images/errorPage.png";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  return (
    <>
      <div className="error-container">
        <img className="error-img" src={errorPage} alt="errorPage" />
        <button className="error-btn" onClick={() => history.replace("/home")}>
          {" "}
          Go Back
        </button>
      </div>
    </>
  );
};

export default Error;
