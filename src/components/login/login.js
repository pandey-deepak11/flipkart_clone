import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import close from "./../../images/close.png";

import Modal from "react-modal";
// import Header from "../header/header";
import { flipkartActions } from "../../store/store";
// import QuickLinks from "../header/quickLinks";
// import Carousel from "../header/carousel";
// import DealsOfDay from "../body/dealsOfDay";
// import Footer from "../footer/footer";

Modal.setAppElement("#root");

const Login = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const [error, setError] = useState(false);
  const isLogging = useSelector((state) => state.isLogging);
  const history = useHistory();
  const dispatch = useDispatch();

  let a;
  // const isLogging = useSelector((state) => state.isLogging);
  // const isLogin = useSelector((state) => state.isLogin);
  // isLogging ? toggleModal() : "";

  const toggleModal = useCallback(() => {
    setIsOpen(isLogging);
  }, [isLogging]);

  useEffect(() => {
    if (isLogging) {
      toggleModal();
    }
    // isLogging ? toggleModal() : "";
  }, [isLogging, toggleModal]);

  if (props.value === isLogging) {
    dispatch(flipkartActions.isLogging(true));
  }

  // const loginFormHandler = (value) => {
  //   toggleModal();
  // };

  const closeClickHandler = () => {
    // dispatch()
    dispatch(flipkartActions.isLogging(false));
    dispatch(flipkartActions.isLogin(false));
    history.push("/home");
    // toggleModal();
  };

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
    setError(false);
  };

  const signupHandler = () => {
    setNewUser(true);
  };

  const signInHandler = () => {
    setNewUser(false);
  };

  const submitHandler = () => {
    if (!error) {
      setError(true);
    }
    if (enteredValue && !error) {
      // setError(false);
      dispatch(flipkartActions.isLogin(true));
      dispatch(flipkartActions.isLogging(false));
      dispatch(flipkartActions.name(enteredValue));
      // setError(true);
    } else {
      setError(true);
    }
  };

  // if (!isLogin) {
  //   dispatch(flipkartActions.isLogging(true));
  // }

  return (
    <div className="login">
      {isLogging ? (
        <div className="modal">
          <Modal
            isOpen={isOpen}
            className="login-modal"
            onRequestClose={toggleModal}
            shouldCloseOnOverlayClick={false}
            contentLabel="My dialog"
          >
            <section className="login-section">
              <article className="login-UI">
                {!newUser ? (
                  <div>
                    <p className="login-text">Login</p>
                    <p className="login-descp">
                      Get access to your Orders, Wishlist and Recommendations
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="logout-text">Looks like you're new here!</p>
                    <p className="logout-descp">
                      Sign up with your mobile number to get started
                    </p>
                  </div>
                )}
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  alt="login/logout"
                />
              </article>
              <img
                onClick={closeClickHandler}
                className="login-close"
                src={close}
                alt="close"
                // onClick={toggleModal}
              />
              <article className="login-form">
                {!newUser ? (
                  <div>
                    <label htmlFor="login-email">
                      Enter Email/Mobile number
                    </label>
                    <input id="login-email" />
                    <label htmlFor="login-password">Enter Password</label>
                    <input id="login-password" type="password" />
                    <p className="login-blueText login-forgotPass">Forgot ?</p>
                    <p className="login-tc">
                      By continuing , you agree to Flipkart's{" "}
                      <span className="login-blueText">Terms of Use</span> and{" "}
                      <span className="login-blueText">Privacy Policy</span>
                    </p>
                    <button type="submit" className="btn-login">
                      Login
                    </button>
                    <p style={{ color: "gray", textAlign: "center" }}>OR</p>

                    <label htmlFor="login-email">Enter Name</label>

                    <input id="login-email" onChange={changeHandler} />
                    {error ? (
                      <p style={{ color: "red", marginTop: "-30px" }}>
                        Enter Your Name to Continue
                      </p>
                    ) : (
                      ""
                    )}

                    <button className="btn-googleLogin" onClick={submitHandler}>
                      {" "}
                      {/* <img
                      className="img-google"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/225px-Google_%22G%22_Logo.svg.png"
                      alt="google"
                    /> */}
                      Sign In As Guest{" "}
                    </button>
                    <div
                      onClick={signupHandler}
                      className="login-blueText"
                      style={{ textAlign: "center" }}
                    >
                      New to Flipkart? Create an account
                    </div>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="login-email">
                      Enter Email/Mobile number
                    </label>
                    <input id="login-email" />
                    <p className="login-tc">
                      By continuing , you agree to Flipkart's{" "}
                      <span className="login-blueText">Terms of Use</span> and{" "}
                      <span className="login-blueText">Privacy Policy</span>
                    </p>
                    <button type="button" className="btn-login">
                      CONTINUE
                    </button>
                    <button
                      onClick={signInHandler}
                      type="button"
                      className="btn-login"
                      style={{
                        color: "blue",
                        background: "white",
                        border: "1px solid rgb(149, 147, 147)",
                      }}
                    >
                      Existing User? Login
                    </button>
                  </div>
                )}
              </article>
            </section>
            {/* <button onClick={toggleModal}>Close modal</button> */}
          </Modal>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Login;
