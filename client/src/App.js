import React, { Component } from "react";
import Calculator from "./components/Calculator/calculator";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import ThankYou from "./pages/ThankYouPage";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import ThankYouPage from "./components/ThankYou";

class App extends Component {
  render() {
    return (
      <>
        {/* <Cart /> */}
        <Router>
          <div>
            <Route path="/login" component={Inventory} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/thankyou" component={ThankYouPage} />
            <Route path="/sales" component={Sales} />
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
