import DealsOfDay from "./components/body/dealsOfDay";
import Carousel from "./components/header/carousel";
import Header from "./components/header/header";
import QuickLinks from "./components/header/quickLinks";
// import Card from "./components/UI/card";

function App() {
  return (
    <>
      <Header />
      <QuickLinks />
      <Carousel />
      <DealsOfDay />
      {/* <Card /> */}
    </>
  );
}

export default App;
