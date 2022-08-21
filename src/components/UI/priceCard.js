import React from "react";
// import { useParams } from "react-router-dom";
import "./priceCard.css";
import coin from "./../../images/coin.webp";
// import { suggestedItems } from "./../../assets/data";

const PriceCard = ({
  name,
  rating,
  ratings,
  newPrice,
  oldPrice,
  offer,
  pay,
  url,
}) => {
  return (
    <>
      <div className="priceCard slide">
        <img src={url} alt="priceCard" className="priceCard-img" />
        <p className="priceCard-name">{name}</p>
        <div className="priceCard-two">
          <p className="priceCard-rating">{`${rating} ⭐`}</p>
          <p className="priceCard-ratings">{ratings}</p>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            alt="flipkart-assured"
            className="flipkart-assured"
          />
        </div>
        <div className="priceCard-three">
          <p className="priceCard-newPrice">{newPrice}</p>
          <p className="priceCard-oldPrice">{oldPrice}</p>
          <p className="offer">{offer}</p>
        </div>
        {pay ? (
          <p className="pay">
            {pay}
            <img className="coin" src={coin} alt="coin" />
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default PriceCard;
