import React, { useState } from "react";
import "./carousel.css";
import mattress from "./../../images/mattress.webp";
import infinix_lap from "./../../images/infinix_lap.webp";
import infinix_mobile from "./../../images/infinix_mobile.webp";
import discounts from "./../../images/discounts.webp";

const Carousel = () => {
  const [active, setActive] = useState(0);
  const images = [mattress, infinix_lap, infinix_mobile];

  const rightClickHandler = (e) => {
    if (active < images.length - 1 && active >= 0) {
      setActive(active + 1);
    }
    if (active >= images.length - 1) {
      setActive(0);
    }
  };
  // console.log(active);

  const leftClickHandler = () => {
    if (active === images.length) {
      setActive(0);
    }
    if (active === 0) {
      setActive(images.length - 1);
    }

    if (active > 0 && active <= images.length - 1) {
      setActive(active - 1);
    }
  };

  // setInterval(() => {
  //   if (active < images.length - 1 && active >= 0) {
  //     setActive(active + 1);
  //   }
  //   if (active >= images.length - 1) {
  //     setActive(0);
  //   }
  // }, 10000);

  return (
    <>
      <div className="container">
        <button
          type="button"
          onClick={leftClickHandler}
          className="left-arrow-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 left-arrow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <img
          className="carousel-img"
          src={images[active]}
          alt="mattress"
          value={active}
          loading="lazy"
        />

        <button
          className="right-arrow-button"
          type="button"
          onClick={rightClickHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 right-arrow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="discounts">
        <img src={discounts} alt="discounts" loading="lazy" />
      </div>
    </>
  );
};

export default Carousel;
