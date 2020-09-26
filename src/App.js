import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import ItemDetail from "./pages/ItemDetail/ItemDetail"
import Cart from "./pages/Cart/Cart"
import Checkout from "./pages/Checkout/Checkout"
import Auth from "./pages/Auth/Auth"
import Footer from "./components/Footer/Footer"
import NoMatch from "./pages/NoMatch/NoMatch"

import { ProductsInCartContext } from './context/ProductsInCartProvider'
import { AuthProvider } from './context/AuthProvider'

function App() {

  return (
    <>
      <ProductsInCartContext>
        <AuthProvider>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products/:sex/:category" component={Products} />
              <Route path="/products/:sex/:category/:id" component={ItemDetail} />
              <Route path="/cart" component={Auth} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/authentication" component={Auth} />
              <Route path="/*" component={NoMatch} />
            </Switch>
          </Router>
        </AuthProvider>
      </ProductsInCartContext>
      <Footer />
    </>
  );
}

export default App