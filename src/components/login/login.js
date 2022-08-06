import React, { useState } from "react";
import "./login.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="login">
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        className="login-modal"
        // onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <section className="login-section">
          <article className="login-UI">
            <p className="login-text">Login</p>
            <p className="login-descp">
              Get access to your Orders, Wishlist and Recommendations
            </p>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt="login/logout-image"
            />
          </article>
          <article className="login-form">
            <label htmlFor="login-email">Enter Email/Mobile number</label>
            <input id="login-email" />
            <label htmlFor="login-password">Enter Email/Mobile number</label>
            <input id="login-password" type="password" />
            <p className="login-blueText login-forgotPass">Forgot ?</p>
            <p className="login-tc">
              By continuing , you agree to Flipkart's{" "}
              <span className="login-blueText">Terms of Use</span> and{" "}
              <span className="login-blueText">Privacy Policy</span>
            </p>
            <button type="button" className="btn-login">
              Login
            </button>
            <p style={{ color: "gray", textAlign: "center" }}>OR</p>
            <button className="btn-googleLogin">
              {" "}
              <img
                className="img-google"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/225px-Google_%22G%22_Logo.svg.png"
                alt="google-image"
              />
              Login with Google{" "}
            </button>
            <p className="login-blueText" style={{ textAlign: "center" }}>
              New to Flipkart? Create an account
            </p>
          </article>
        </section>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
};
export default Login;
