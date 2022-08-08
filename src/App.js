import { Route, Switch } from "react-router-dom";
import Index from "./pages";
import Cart from "../src/components/cart/cart";
import Product from "./components/UI/product";

function App() {
  return (
    <>
      <Switch>
        <Route path="/home" exact>
          <Index />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/product/:productId">
          <Product />
        </Route>
      </Switch>
      {/* <Index /> */}
    </>
  );
}

export default App;
