import React from "react";
import Header from "../components/header/header";
import QuickLinks from "../components/header/quickLinks";
import Carousel from "../components/header/carousel";
import DealsofDay from "../components/body/dealsOfDay";
import Footer from "../components/footer/footer";

const Main = () => {
  return (
    <div>
      <Header />
      <QuickLinks />
      <Carousel />
      <DealsofDay />
      <Footer />
    </div>
  );
};

export default Main;
