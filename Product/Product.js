import React from "react";
import { NavLink } from "react-router-dom";
import productImage from "./../images/qm.jpg";
import "./Product.css";

export default class Product extends React.Component {
  render() {
    return (
      <section className="App-products">
        <section className="products">
          <NavLink id="loginBtn" to="details-sec">
            <img className="product-image" src={productImage} alt="Product" />
          </NavLink>
          <p>Product Name</p>
          <p>Product Description</p>
          <p>Price $$</p>
          <NavLink id="loginBtn" to="cart-sec">
            <button className="product-button">Add To Cart</button>
          </NavLink>
        </section>
        <section className="products">
          <NavLink id="loginBtn" to="details-sec">
            <img className="product-image" src={productImage} alt="Product" />
          </NavLink>
          <p>Product Name</p>
          <p>Product Description</p>
          <p>Price $$</p>
          <NavLink id="loginBtn" to="cart-sec">
            <button className="product-button">Add To Cart</button>
          </NavLink>
        </section>
        <section className="products">
          <NavLink id="loginBtn" to="details-sec">
            <img className="product-image" src={productImage} alt="Product" />
          </NavLink>
          <p>Product Name</p>
          <p>Product Description</p>
          <p>Price $$</p>
          <NavLink id="loginBtn" to="cart-sec">
            <button className="product-button">Add To Cart</button>
          </NavLink>
        </section>
        <section className="products">
          <NavLink id="loginBtn" to="details-sec">
            <img className="product-image" src={productImage} alt="Product" />
          </NavLink>
          <p>Product Name</p>
          <p>Product Description</p>
          <p>Price $$</p>
          <NavLink id="loginBtn" to="cart-sec">
            <button className="product-button">Add To Cart</button>
          </NavLink>
        </section>
        <section className="products">
          <NavLink id="loginBtn" to="details-sec">
            <img className="product-image" src={productImage} alt="Product" />
          </NavLink>
          <p>Product Name</p>
          <p>Product Description</p>
          <p>Price $$</p>
          <NavLink id="loginBtn" to="cart-sec">
            <button className="product-button">Add To Cart</button>
          </NavLink>
        </section>
        <section className="products">
          <NavLink id="loginBtn" to="details-sec">
            <img className="product-image" src={productImage} alt="Product" />
          </NavLink>
          <p>Product Name</p>
          <p>Product Description</p>
          <p>Price $$</p>
          <NavLink id="loginBtn" to="cart-sec">
            <button className="product-button">Add To Cart</button>
          </NavLink>
        </section>
      </section>
    );
  }
}
