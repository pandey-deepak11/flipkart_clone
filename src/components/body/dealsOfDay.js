import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deals } from "../../assets/data";
import clock from "./../../images/clock.png";
import dealsSide from "./../../images/dealsSide.webp";
import "./dealsOfDay.css";
import Card from "../UI/card";
import BigCard from "../UI/bigCard";
import { suggestedItems } from "../../assets/data";
import PriceCard from "../UI/priceCard";

const DealsOfDay = () => {
  // var s = 0;
  const [second, setSecond] = useState(60 - new Date().getSeconds());
  const [minute, setMinute] = useState(60 - new Date().getMinutes());
  const [hour, sethour] = useState(24 - new Date().getHours());
  // const [cl, setCl] = useState("new");
  const [button, setButton] = useState("left");

  // const clickHandler = (e) => {
  //   setCl("old");
  // };

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
  }
  if (hour === 24) {
    sethour(23);
  }

  const leftClickHandler = (e) => {
    console.log("left");
    setButton("left");
  };

  const rightClickHandler = (e) => {
    setButton("right");
    console.log("right");
  };

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
            <button
              type="button"
              onClick={leftClickHandler}
              className="left-arrow-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 left-arrow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {deals.map((prod) => (
              <Card
                url={prod.url}
                name={prod.name}
                offer={prod.offer}
                caption={prod.caption}
                buttonClicked={button}
              />
            ))}
            <button
              className="right-arrow-button"
              type="button"
              onClick={rightClickHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 right-arrow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* <button onClick={clickHandler}>CLICK</button> */}
        </div>
        <div className="side-img-container">
          <img className="side-image" src={dealsSide} alt="side-advertise" />
        </div>
      </section>
      <section className="tabbed-card">
        <BigCard url="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/912d0f8f0f51d348.jpg?q=50" />
        <BigCard url="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/64f90e49fbfc434f.jpg?q=50" />
        <BigCard url="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/2694211412c3190d.jpg?q=50" />
      </section>
      <section className="recent">
        <div className="header wider">
          <p className="dealsOfDay">Recently Searched</p>
        </div>
        <div className="recent-searched ">
          <button
            type="button"
            // onClick={leftClickHandler}
            className="left-arrow-button-one"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 left-arrow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          {suggestedItems.map((prod) => (
            // <Link to={`/product/${prod.id}`}>
            <PriceCard
              name={prod.name}
              rating={prod.rating}
              ratings={prod.ratings}
              newPrice={prod.newPrice}
              oldPrice={prod.oldPrice}
              offer={prod.offer}
              pay={prod.pay}
              url={prod.url}
            />
            // </Link>
          ))}
          <button
            className="right-arrow-button-one"
            type="button"
            // onClick={rightClickHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 right-arrow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>
      <section className="second-tabbed-card">
        <BigCard url="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/3c5e1614bfa336d9.jpg?q=50" />
        <BigCard url="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/fcbc392a6003312c.jpg?q=50" />
        <BigCard url="https://rukminim1.flixcart.com/fk-p-flap/960/960/image/9464fd78b8f53463.jpg?q=50" />
      </section>
    </>
  );
};

export default DealsOfDay;
