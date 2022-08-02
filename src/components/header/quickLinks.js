import React from "react";
import "./quickLinks.css";
import fashion from "./../../images/fashion.webp";
import toys from "./../../images/toys.webp";
import travel from "./../../images/travel.webp";
import home from "./../../images/home.webp";
import mobiles from "./../../images/mobiles.webp";
import grocery from "./../../images/grocery.webp";
import top_offers from "./../../images/top_offers.webp";
import electronics from "./../../images/electronics.webp";
import appliances from "./../../images/appliances.webp";

const QuickLinks = () => {
  return (
    <>
      <div className="quickLinks">
        <div className="topOffers">
          <img className="quickLink-img" src={top_offers} alt="topOffers" />
          <p className="quickLinks-p">Top Offers</p>
        </div>
        <div className="grocery">
          <img className="quickLink-img" src={grocery} alt="grocery" />
          <p className="quickLinks-p">Grocery</p>
        </div>
        <div className="mobiles">
          <img className="quickLink-img" src={mobiles} alt="mobiles" />
          <p className="quickLinks-p">Mobiles</p>
        </div>
        <div className="fashion">
          <img className="quickLink-img" src={fashion} alt="fashion" />
          <p className="quickLinks-p">
            Fashion{" "}
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 downIcon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </p>
        </div>
        <div className="electronics">
          <img className="quickLink-img" src={electronics} alt="electronics" />
          <p className="quickLinks-p">
            Electronics{" "}
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 downIcon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </p>
        </div>
        <div className="home">
          <img className="quickLink-img" src={home} alt="home" />
          <p className="quickLinks-p">
            Home{" "}
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 downIcon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </p>
        </div>
        <div className="appliances">
          <img className="quickLink-img" src={appliances} alt="appliances" />
          <p className="quickLinks-p">Appliances</p>
        </div>
        <div className="travel">
          <img className="quickLink-img" src={travel} alt="travel" />
          <p className="quickLinks-p">Travel</p>
        </div>
        <div className="toys">
          <img className="quickLink-img" src={toys} alt="toys" />
          <p className="quickLinks-p">
            Beauty, Toys & More{" "}
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 downIcon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default QuickLinks;