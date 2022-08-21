import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import logo from "./../../images/logo.png";
import plusIcon from "./../../images/plus_icon.png";
import carrt from "./../../images/cart.png";
import { flipkartActions } from "../../store/store";

const Header = () => {
  // const [isLogging, setisLogging] = useState(false);
  const isLogin = useSelector((state) => state.isLogin);
  const isLogging = useSelector((state) => state.isLogging);
  const products = useSelector((state) => state.totalProducts);
  const dispatch = useDispatch();

  const loginHandler = () => {
    // console.log(props);
    dispatch(flipkartActions.isLogging(true));
  };

  const logoutHandler = () => {
    // setisLogging(true);
    dispatch(flipkartActions.isLogging(false));
    dispatch(flipkartActions.isLogin(false));
  };

  const a = isLogging ? "navbar-bottom" : "navbar";

  return (
    <div className=" navbar navbar-bottom">
      <nav className="navigation">
        <NavLink to="/home">
          <div className="logo">
            <img src={logo} alt="flipkart-logo" />

            <p>
              <em>
                Explore <span>Plus</span>
                <img src={plusIcon} alt="icon" className="plusIcon" />
              </em>
            </p>
          </div>
        </NavLink>
        <div className="search-Myaccount">
          <input
            type="text"
            name="search"
            placeholder="Search for products, brands and more "
          />
          {isLogin && !isLogging ? (
            <div className="myAcc">
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
              <div className="myAcc-dropdown">
                <div className="myAcc-dropdown-items">
                  <p onClick={logoutHandler}>LOG OUT</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="myAcc-btn">
              <button onClick={loginHandler} className="myAcc-login-btn">
                LOGIN
              </button>
            </div>
          )}
        </div>
        <p className="becomeSeller">Become a Seller</p>
        <div className="more-main">
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
          <div className="more-dropdown">
            <div className="more-dropdown-items">
              <p>Customer Care</p>
              <p>Download App</p>
            </div>
          </div>
        </div>
        <div className="cart">
          <img className="cartImg" src={carrt} alt="cart" />
          {isLogin ? <p className="quantity">{products.length}</p> : ""}

          <NavLink activeClassName="navlink-class" to="/cart">
            <p style={{ color: "white", textDecoration: "none" }}>Cart</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
