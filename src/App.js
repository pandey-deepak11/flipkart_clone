import DealsOfDay from "./components/body/dealsOfDay";
import Footer from "./components/footer/footer";
import Carousel from "./components/header/carousel";
import Header from "./components/header/header";
import QuickLinks from "./components/header/quickLinks";
// import Card from "./components/UI/card";
// import BigCard from "./components/UI/bigCard";

// import PriceCard from "./components/UI/priceCard";

function App() {
  return (
    <>
      <Header />
      <QuickLinks />
      <Carousel />
      <DealsOfDay />
      <Footer />
      {/* <PriceCard /> */}
      {/* <Card /> */}
      {/* <BigCard /> */}
    </>
  );
}

export default App;
