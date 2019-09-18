import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import Details from "./Details/Details";
import About from "./About/About";
import Help from "./Help/Help";
import Contacts from "./Contacts/Contacts";
import Submited from "./Submitted/Submitted";
import Footer from "./Footer/Footer";
import PageNotFound from "./PageNotFound/PageNotFound";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header className="App-header">
          <Header />
        </header>

        <Switch id="BrowserRouterSwitch">
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/product-sec" component={Product} />
          <Route path="/cart-sec" component={Cart} />
          <Route path="/details-sec" component={Details} />
          <Route path="/about-sec" component={About} />
          <Route path="/help-sec" component={Help} />
          <Route path="/contacts-sec" component={Contacts} />
          <Route path="/send-submit" component={Submited} />
          <Route path="/:PageNotFound" component={PageNotFound} />
        </Switch>

        <footer className="App-footer">
          <Footer />
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
