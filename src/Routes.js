import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Layout from "./components/Layout/Layout";
import CartProvider from "./context/CartContext";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <CartProvider>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Layout>
        </CartProvider>
      </Switch>
    </Router>
  );
};

export default Routes;
