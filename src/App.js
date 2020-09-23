import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import NoMatch from "./pages/NoMatch/NoMatch";

import { ProductsInCartContext } from './context/ProductsInCartProvider'
import { PopUpCartContext } from './context/PopUpCartProvider'
import { TotalToPayContext } from './context/TotalToPayProvider'

function App() {

  return (
    <>
      <ProductsInCartContext>
        <PopUpCartContext>
          <TotalToPayContext>
            <Router>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products/:sex/:category" component={Products} />
                <Route path="/products/:sex/:category/:id" component={ItemDetail} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/*" component={NoMatch} />
              </Switch>
            </Router>
          </TotalToPayContext>
        </PopUpCartContext>
      </ProductsInCartContext>
      <Footer />
    </>
  );
}

export default App;