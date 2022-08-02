import Main from "./components/body/main";
import Carousel from "./components/header/carousel";
import Header from "./components/header/header";
import QuickLinks from "./components/header/quickLinks";

function App() {
  return (
    <>
      <Header />
      <QuickLinks />
      <Carousel />
      <Main />
    </>
  );
}

export default App;
