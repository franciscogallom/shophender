import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import NoMatch from "./components/NoMatch/NoMatch";

import ItemDetail from "./components/ItemDetail/ItemDetail"; // LUEGO BORRAR

// Importo el Context
import { ItemsQuantityContext } from './context/ItemsQuantityProvider'

function App() {

  return (
    <>
      <ItemsQuantityContext>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} /> {/*SACAR EXACT*/}
            <Route path="/cart" component={Cart} />

            {/* Ruta de prueba, BORRAR LUEGO. */}
            <Route path="/products/men/coats/abc123" component={ItemDetail} />

            <Route path="/*" component={NoMatch} />


          </Switch>
        </Router>
      </ItemsQuantityContext>
      <Footer />
    </>
  );
}

export default App;