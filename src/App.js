import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import NoMatch from "./pages/NoMatch/NoMatch";

import { ItemsQuantityContext } from './context/ItemsQuantityProvider'
import { PopUpCartContext } from './context/PopUpCartProvider'
import { TotalToPayContext } from './context/TotalToPayProvider'

import ItemDetail from "./pages/ItemDetail/ItemDetail"; // LUEGO BORRAR

function App() {

  return (
    <>
      <ItemsQuantityContext>
        <PopUpCartContext>
          <TotalToPayContext>
            <Router>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route path="/products/:sex/:category/:id" component={ItemDetail} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/*" component={NoMatch} />
              </Switch>
            </Router>
          </TotalToPayContext>
        </PopUpCartContext>
      </ItemsQuantityContext>
      <Footer />
    </>
  );
}

export default App;