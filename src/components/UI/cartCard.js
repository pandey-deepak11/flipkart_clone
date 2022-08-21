import React, { useState } from "react";
import "./cartCard.css";
import { useSelector } from "react-redux";
import { flipkartActions } from "../../store/store";

const CartCard = (props) => {
  // const [count, setCount] = useState(0);
  // let count = 0;
  const products = useSelector((state) => state.count) || [];

  const count = products.map((i) => i[0]);

  const counts = {};
  count.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  return (
    <>
      <section className="cart-item">
        <div className="cart-item-img-name">
          <img
            className="cart-item-img"
            // src="https://rukminim1.flixcart.com/image/224/224/l3uhvgw0/bean-bag/r/5/5/xxl-shbbclxxlbrngreyfl-style-homez-original-imagevkhs4fv6njm.jpeg?q=90"
            src={props.url}
            alt="cart-items"
          />

          <article className="cart-item-details">
            <div className="cart-item-name-deliveryDate">
              <p className="item-cart-heading">
                {props.name}
                {/* STYLE HOMEZ XXL Premium Leatherette Classic Bro... */}
              </p>
              <p className="item-cart-deliveryDate">
                Delivery by {new Date().toDateString("7", "12", "2022")}
                <span className="item-cart-deliveryfree"> | Free</span>
              </p>
            </div>
            <p className="item-cart-color">{props.color}</p>
            <p className="item-cart-seller">Seller:{props.seller}</p>
            <div className="cart-item-price">
              <p className="cart-item-oldPrice">{props.oldPrice}</p>
              <p className="cart-item-newPrice">{props.newPrice}</p>
              <h5 className="cart-item-offer">{props.offer}</h5>
              <h5 className="cart-item-offersApplied">
                {" "}
                {props.id} offers applied
              </h5>
            </div>
          </article>
        </div>
        <article className="cart-item-quantity">
          <button className="cart-item-reduceItem">-</button>
          <p className="cart-item-no">{counts[+props.id]}</p>
          <button className="cart-item-increaseItem">+</button>
          <p className="cart-item-saveLater">SAVE FOR LATER</p>
          <p className="cart-item-removeItem">REMOVE</p>
        </article>
      </section>
    </>
  );
};

export default CartCard;
