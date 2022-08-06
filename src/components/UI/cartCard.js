import React from "react";
import "./cartCard.css";

const CartCard = () => {
  return (
    <>
      <section className="cart-item">
        <div className="cart-item-img-name">
          <img
            className="cart-item-img"
            src="https://rukminim1.flixcart.com/image/224/224/l3uhvgw0/bean-bag/r/5/5/xxl-shbbclxxlbrngreyfl-style-homez-original-imagevkhs4fv6njm.jpeg?q=90"
          />

          <article className="cart-item-details">
            <div className="cart-item-name-deliveryDate">
              <p className="item-cart-heading">
                STYLE HOMEZ XXL Premium Leatherette Classic Bro...
              </p>
              <p className="item-cart-deliveryDate">
                Delivery by {new Date().toDateString("7", "12", "2022")}
                <span className="item-cart-deliveryfree"> | Free</span>
              </p>
            </div>
            <p className="item-cart-color">Brown,Grey</p>
            <p className="item-cart-seller">Seller:Style HomeZ</p>
            <div className="cart-item-price">
              <p className="cart-item-oldPrice">Rs.5980</p>
              <p className="cart-item-newPrice">Rs. 3964</p>
              <h5 className="cart-item-offer">38% Off</h5>
              <h5 className="cart-item-offersApplied"> 3 offers applied</h5>
            </div>
          </article>
        </div>
        <article className="cart-item-quantity">
          <button className="cart-item-reduceItem">-</button>
          <p className="cart-item-no">5</p>
          <button className="cart-item-increaseItem">+</button>
          <p className="cart-item-saveLater">SAVE FOR LATER</p>
          <p className="cart-item-removeItem">REMOVE</p>
        </article>
      </section>
    </>
  );
};

export default CartCard;
