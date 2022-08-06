import React from "react";
import Header from "../header/header";
import CartCard from "../UI/cartCard";
import "./cart.css";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="cart-page">
        <section className="cart-main">
          <p className="flipkart-grocery">
            Your Cart have <span>No of items</span>
          </p>
          <article className="cart-address-button">
            <div className="cart-address">
              <p>
                {" "}
                Deliver to :{" "}
                <span className="cart-userName"> Deepak Kumar ,829128</span>
                <span className="cart-home-icon">Home</span>
              </p>
              <p className="cart-state">
                Sawang ,Hazari More , Bokaro , Jharkhand
              </p>
            </div>
            <div className="cart-button">
              <button className="button-change-address" type="button">
                {" "}
                Change{" "}
              </button>
            </div>
          </article>
        </section>
        <CartCard />
        <CartCard />
        <div className="placeOrder">
          <button className="btn-placeOrder">PLACE ORDER</button>
        </div>
      </div>
      <aside className="cart-amount-details">
        <p className="priceDetails">PRICE DETAILS</p>
        <article className="amount-descp">
          <div className="totalAmount">
            <p> Price (4 items)</p>
            <p>Rs 22,379</p>
          </div>
          <div className="totalDiscount">
            <p> Discount</p>
            <p className="discountAmount"> - Rs. 7,686</p>
          </div>
          <div className="totalDeliveryAmount">
            <p>Delivery Charges</p>
            <p className="free">FREE</p>
          </div>
          <div className="totalGST">
            <p>Secured Packing Fee</p>
            <p>Rs 29</p>
          </div>
          <div className="totalAmountInc">
            <p> Total Amount</p>
            <p>Rs 14,722</p>
          </div>
        </article>
        <p className="savingInfo">You will save Rs 7,657 on this order</p>
        <div className="securePayment">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg"
            alt="securePayment"
          />
          <h5>
            Safe and Secure Payments.Easy returns. 100% Authentic Products.
          </h5>
        </div>
      </aside>

      <footer>
        <div className="footer-links">
          <p>Policies: </p>
          <p> Returns Policy | </p>
          <p>Terms of use </p>
          <p> | Security</p>
          <p> | Privacy</p>
          <p> | Infringment</p>
        </div>
        <p className="copyright">© 2007-2022 Flipkart.com</p>
        <p>
          Need help? Visit the <span className="blueText">Help Center</span> or{" "}
          <span className="blueText">Contact Us</span>
        </p>
      </footer>
    </>
  );
};

export default Cart;
