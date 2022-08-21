import React from "react";
import { useSelector } from "react-redux";
import Header from "../header/header";
import Login from "../login/login";
import CartCard from "../UI/cartCard";
import "./cart.css";
// import { flipkartActions } from "../../store/store";
import bg from "./../../images/bg.gif";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Cart = () => {
  // const dispatch = useDispatch();
  let count = 0;
  const isLogging = useSelector((state) => state.isLogging);
  const isLogin = useSelector((state) => state.isLogin);
  const name = useSelector((state) => state.name);
  const [location, setLocation] = useState({});

  // if (!isLogin) {
  //   dispatch(flipkartActions.isLogging(true));
  // }

  const product = useSelector((state) => state.cart) || [];
  const products = useSelector((state) => state.totalProducts) || [];
  let totalPrice, OldPrice, discount;
  if (products.length > 0) {
    totalPrice =
      products
        .map((i) => +i.newPrice.slice(3))
        .reduce((total, num) => total + num) || 0;

    OldPrice =
      products
        .map((i) => +i.oldPrice.slice(3))
        .reduce((total, num) => total + num) || 0;

    discount = totalPrice - OldPrice || 0;
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const options = {
          method: "GET",
          url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse",
          params: {
            lat: `${pos.lat}`,
            lon: `${pos.lng}`,
            "accept-language": "en",
            polygon_threshold: "0.0",
          },
          headers: {
            "X-RapidAPI-Key":
              "9bf931b39cmsh0bf5cba4ab8dc95p1b500cjsn43c31eaf268a",
            "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
          },
        };

        axios
          .request(options)
          .then((response) => {
            setLocation({ res: response.data.address });
            console.log(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      });
    }
  }, []);
  // console.log(location);

  return (
    <>
      {isLogin && !isLogging ? (
        <div>
          <Header />
          <div className="cart-page">
            <section className="cart-main">
              <p className="flipkart-grocery">
                <span className="cart-userName">{name ? name : "User"}</span>
                ,Your Cart have <span> {products.length} items</span>
              </p>
              <article className="cart-address-button">
                <div className="cart-address">
                  <p>
                    {" "}
                    Deliver to :{" "}
                    <span className="cart-Name">
                      {" "}
                      {name ? name : "Deepak Kumar"} ,
                      {location.res?.postcode || "829128"}
                    </span>
                    <span className="cart-home-icon">Home</span>
                  </p>
                  <p className="cart-state">
                    {location.res?.town || ""},
                    {location.res?.county || "Bokaro"} ,{" "}
                    {location.res?.state || "Jharkhand"}
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
            {product.map((p) => (
              <CartCard
                url={p.url}
                name={p.name}
                color={p.color}
                seller={p.seller}
                oldPrice={p.oldPrice}
                newPrice={p.newPrice}
                offer={p.offer}
                id={p.id}
                occ={p.id}
                key={p.color}
              />
            ))}

            <div className="placeOrder">
              <button className="btn-placeOrder">PLACE ORDER</button>
            </div>
          </div>
          <aside className="cart-amount-details">
            <p className="priceDetails">PRICE DETAILS</p>
            <article className="amount-descp">
              <div className="totalAmount">
                <p> Price ({products.length} items)</p>
                <p>Rs {(totalPrice || 0) - (discount || 0)}</p>
              </div>
              <div className="totalDiscount">
                <p> Discount</p>
                <p className="discountAmount"> - Rs. {discount || 0}</p>
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
                <p>Rs {(totalPrice || 0) + 29}</p>
              </div>
            </article>
            <p className="savingInfo">
              You will save Rs {discount || 0} on this order
            </p>
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

          <footer className="cart-footer">
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
              Need help? Visit the <span className="blueText">Help Center</span>{" "}
              or <span className="blueText">Contact Us</span>
            </p>
          </footer>
        </div>
      ) : (
        <div>
          <Login value={isLogging} />
          <div
            style={{
              backgroundImage: `url(${bg})`,
              // backgroundImage: `url(${externalImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "absolute",
              top: "0px",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Cart;
