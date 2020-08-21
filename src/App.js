import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;