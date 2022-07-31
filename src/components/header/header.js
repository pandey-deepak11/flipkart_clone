import React from "react";
import "./header.css";
import logo from "./../../images/logo.png";
import plusIcon from "./../../images/plus_icon.png";
import search_icon from "./../../images/search_icon.png";
import carrt from "./../../images/cart.png";

const Header = () => {
  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <img src={logo} alt="flipkart-logo" />
          <p>
            <em>
              Explore <span>Plus</span>
              <img src={plusIcon} alt="icon" className="plusIcon" />
            </em>
          </p>
        </div>
        <div className="search-Myaccount">
          <input
            type="text"
            name="search"
            placeholder="Search for products, brands and more "
          />
          <p>
            {" "}
            My Account{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 downIcon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
        </div>
        <p className="becomeSeller">Become a Seller</p>
        <p className="more">
          More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 downIcon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </p>
        <div className="cart">
          <img className="cartImg" src={carrt} alt="cart" />
          <p className="quantity">6</p>
          <p>Cart</p>
        </div>
      </nav>
    </>
  );
};

export default Header;
