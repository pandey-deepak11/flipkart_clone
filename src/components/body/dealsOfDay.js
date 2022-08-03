import React, { useEffect, useState } from "react";
import { deals } from "../../assets/data";
import clock from "./../../images/clock.png";
import dealsSide from "./../../images/dealsSide.webp";
import "./dealsOfDay.css";
import Card from "../UI/card";

const DealsOfDay = () => {
  // var s = 0;
  const [second, setSecond] = useState(60 - new Date().getSeconds());
  const [minute, setMinute] = useState(60 - new Date().getMinutes());
  const [hour, sethour] = useState(24 - new Date().getHours());
  const [cl, setCl] = useState("hide");

  const clickHandler = (e) => {
    const a = cl ? "visible" : "hide";
    setCl(a);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(second - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [second, minute, hour]);

  if (second === 0) {
    setSecond(59);
    setMinute(minute - 1);
  }
  if (minute === 0) {
    setMinute(59);
    sethour(hour - 1);
  }

  return (
    <>
      <section className="deals-container">
        <div className="body-container">
          <div className="header">
            <div className="left-header">
              <p className="dealsOfDay">Deals of the Day</p>
              <img className="clock" src={clock} alt="clock" loading="lazy" />
              <p className="time-left">
                {`${hour} : ${minute} : ${second}`} Left
              </p>
            </div>
            <div className="right-header">
              <button className="view-all">VIEW ALL</button>
            </div>
          </div>
          <div className="deals-product">
            {" "}
            {deals.map((prod) => (
              <Card
                url={prod.url}
                name={prod.name}
                offer={prod.offer}
                caption={prod.caption}
              />
            ))}
          </div>
        </div>
        <div className="side-img-container">
          <img className="side-image" src={dealsSide} alt="side-advertise" />
        </div>
      </section>
    </>
  );
};

export default DealsOfDay;
