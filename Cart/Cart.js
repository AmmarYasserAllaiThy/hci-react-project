import React from "react";
import { NavLink } from "react-router-dom";
import Cover from "./../images/cover.jpg";
import Cover2 from "./../images/cover2.jpg";
import Cover3 from "./../images/cover4.jpg";
import "./Cart.css";

export default class Cart extends React.Component {
  render() {
    return (
      <section className="App-cart">
        <h1 id="h1">You have thoes items added to cart</h1>
        <section id="sec2">
          <p className="prod">Product</p>
          <section className="quan">
            <p>Price</p>
          </section>
        </section>

        <section className="cart">
          <section id="cart">
            <NavLink className="NavLink" to="details-sec">
              <img id="cartImg" src={Cover} alt="cart" />
            </NavLink>
            <p>
              <b>Experia C3 Cover</b>
            </p>
          </section>
          <p className="price">
            <b>$15</b>
          </p>
          <button className="buy">Buy</button>
        </section>

        <section className="cart">
          <section id="cart">
            <NavLink className="NavLink" to="details-sec">
              <img id="cartImg" src={Cover2} alt="cart" />
            </NavLink>
            <p>
              <b>Experia T2 Cover</b>
            </p>
          </section>
          <p className="price">
            <b>$25</b>
          </p>
          <button className="buy">Buy</button>
        </section>

        <section className="cart">
          <section id="cart">
            <NavLink className="NavLink" to="details-sec">
              <img id="cartImg" src={Cover3} alt="cart" />
            </NavLink>
            <p>
              <b>Experia Z1 Cover</b>
            </p>
          </section>
          <p className="price">
            <b>$20</b>
          </p>
          <button className="buy">Buy</button>
        </section>
      </section>
    );
  }
}
