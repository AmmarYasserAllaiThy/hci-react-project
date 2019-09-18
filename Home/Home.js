import React from "react";
import Product from "./Product/Product";

export default class Home extends React.Component {
  render() {
    return (
      <section className="home-products">
        for (let {(idx = 0)}; {idx < 20}; {idx++}) <Product />
      </section>
    );
  }
}
