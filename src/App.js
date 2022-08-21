import { Route, Switch, Redirect } from "react-router-dom";
import Index from "./pages";
import { useSelector } from "react-redux";
import Cart from "../src/components/cart/cart";
import ProductDescp from "./pages/productDescp";
import UnderConstruction from "./pages/underConstruction";
import Error from "./pages/error";
import Login from "./components/login/login";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Index />
        </Route>
        <Route path="/underwork" exact>
          <UnderConstruction />
        </Route>

        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/product/:productId">
          <ProductDescp />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
