import React from "react";
import "./product.css";
import { suggestedItems } from "../../assets/data";

const Product = () => {
  return (
    <>
      <section className="product-main">
        <article className="product-container">
          <div className="product-main-img">
            <img
              className="product-img"
              src={suggestedItems[0].url}
              alt="image"
            />
          </div>
          <div className="product-main-details">
            <p className="product-main-name">{suggestedItems[0].name}</p>
            <div className="product-main-price">
              <p className="product-main-newPrice">
                {suggestedItems[0].newPrice}
              </p>
              <p className="product-main-oldPrice">
                {suggestedItems[0].oldPrice}
              </p>
            </div>
            <div className="product-main-offers">
              <p className="product-main-rating">
                {suggestedItems[0].rating}⭐
              </p>
              <p className="product-main-ratings">
                {suggestedItems[0].ratings}
              </p>
              <p className="product-main-offers">{suggestedItems[0].offer}</p>
            </div>
            <p className="product-main-seller">
              Seller : {suggestedItems[0].seller}
            </p>
            <p className="product-main-color">
              Color : {suggestedItems[0].color}
            </p>
            <img
              className="product-main-supercoin"
              src="https://rukminim1.flixcart.com/lockin/710/170/images/CCO__PP_2019-07-14.png?q=50"
              alt="image"
            />
          </div>
        </article>
        {/* <div className="product-main-productDescp">
          <h4>Product Description</h4>
        </div> */}
        <article className="product-main-btn">
          <button className="btn-addCart">
            {" "}
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv btn-svg"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ShoppingCartIcon"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>{" "}
            Add to Cart
          </button>
          <button className="btn-buy">
            {" "}
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv btn-svg"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FlashOnIcon"
            >
              <path d="M7 2v11h3v9l7-12h-4l4-8z"></path>
            </svg>{" "}
            Buy Now
          </button>
        </article>
      </section>
    </>
  );
};

export default Product;
