import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <article className="about">
          <div className="about-title">ABOUT</div>
          <div className="about-child">
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Carrers</p>
            <p>Flipkart Stories</p>
            <p>Press</p>
            <p>Flipkart Wholesale</p>
            <p>Corporate Information</p>
          </div>
        </article>
        <article className="help">
          <div className="help-title">HELP</div>
          <div className="help-child">
            <p>Payments</p>
            <p>Shipping</p>
            <p>Cancellation & Returns</p>
            <p>FAQ</p>
            <p>Report Infrigment</p>
          </div>
        </article>
        <article className="policy">
          <div className="policy-title">POLICY</div>
          <div className="policy-child">
            <p>Return Policy</p>
            <p>Terms of USe</p>
            <p>Security</p>
            <p>Privacy</p>
            <p>Sitemap</p>
            <p>EPR Compliance</p>
          </div>
        </article>
        <article className="social">
          <div className="social-title">SOCIAL</div>
          <div className="social-child">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>YouTube</p>
          </div>
        </article>
      </section>
      <section className="contact">
        <article className="mail-us">
          <div className="mail-us-title">Mail Us:</div>
          <div className="mail-us-child">
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103, Karnataka, India</p>
          </div>
        </article>
        <article className="address">
          <div className="address-title">Registered Office Address</div>
          <div className="address-child">
            <p> Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
            <p>CIN : U51109KA2012PTC066107</p>
            <p>
              Telephone: <span style={{ color: "blue" }}>044-45614700</span>
            </p>
          </div>
        </article>
      </section>
      <section className=""></section>
    </footer>
  );
};

export default Footer;
