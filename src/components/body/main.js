import React, { useEffect, useState } from "react";
import { deals } from "../../assets/data";
import "./main.css";

const Main = () => {
  var s = 0;
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, sethour] = useState(0);

  const clickHandler = () => {};

  useEffect(() => {
    if (second === 60) {
      setSecond(0);
      setMinute(minute + 1);
    }
    if (minute === 60) {
      setMinute(0);
      sethour(hour + 1);
    }
  }, [minute, hour]);

  setInterval(() => {
    // setSecond(second + 1);
    s = s + 1;
    setSecond(s);
  }, 1000);

  //   setSecond(s);

  return (
    <>
      <div className="body-container">
        <div className="header">
          <p>Deals of the Day</p>
          {/* {console.log(timer)} */}
          <h1>{`${hour} : ${minute} : ${s}`}</h1>
        </div>
      </div>
      <div className="dealsOfDay">
        {deals.map((i, a) => (
          <div className="deals-list">
            <p>{i.name}</p>
            <p>{i.offer}</p>
            <p>{i.caption}</p>
          </div>
        ))}

        <button onClick={clickHandler}></button>
      </div>
    </>
  );
};

export default Main;
