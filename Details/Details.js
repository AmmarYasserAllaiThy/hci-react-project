import React from "react";
import { NavLink } from "react-router-dom";
import ProductImg from "./../images/cover.jpg";
import Cover2 from "./../images/cover2.jpg";
import Cover3 from "./../images/cover3.jpg";
import Cover4 from "./../images/cover4.jpg";
import "./Detail.css";

export default class Details extends React.Component {
  render() {
    return (
      <section className="App-details">
        <img id="proimg" src={ProductImg} alt="cover" />
        <section className="details">
          <h1 id="id">
            <b>Sony Experia C3 Organic Mobile Cover</b>
          </h1>
          <h2 id="id2">
            <i>Envieroment friendly BioDigradable</i>
          </h2>
          <p id="p">
            <b>Price: $15</b>
          </p>
          <p id="p2">
            Description: the no panic it is organic cover is a whole stunning
            generation of mobile covers that is enviroment friendly and user
            ecofriendly, it is biodegarded after you stop use it so you pay what
            you are gonna gain as a plante saver after that
          </p>
          <p id="p">
            <b>More shapes available:</b>
          </p>
          <img id="ig" src={Cover2} alt="cover" />
          <img id="ig" src={Cover3} alt="cover" />
          <img id="ig" src={Cover4} alt="cover" />
          <NavLink className="NavLink" to="cart-sec">
            <button className="btn">Add To Cart</button>
          </NavLink>
        </section>
      </section>
    );
  }
}
