import React from "react";
import { NavLink } from "react-router-dom";
import imageHelp from "./../images/help.png";
import imageAbout from "./../images/about.png";
import imageInfo from "./../images/info.png";
import imageCart from "./../images/cart.png";
import imageLogout from "./../images/logout.png";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 id="siteName">
          <NavLink className="NavLink" id="loginBtn" to="product-sec">
            <span className="sto">Sto</span>mata{" "}
            <span className="sto">Sto</span>re
          </NavLink>
        </h1>
        <section id="siteMap">
          <NavLink className="siteMap-NavLinks" to="about-sec">
            <img className="siteMap-img" src={imageAbout} alt="About" />
          </NavLink>
          <NavLink className="siteMap-NavLinks" to="help-sec">
            <img className="siteMap-img" src={imageHelp} alt="Help" />
          </NavLink>
          <NavLink id="contacts" className="siteMap-NavLinks" to="contacts-sec">
            <img className="siteMap-img" src={imageInfo} alt="Contacts" />
          </NavLink>

          <NavLink className="siteMap-NavLinks" to="cart-sec">
            <img className="siteMap-img" src={imageCart} alt="Cart" />
          </NavLink>
          <NavLink className="siteMap-NavLinks" to="login">
            <img className="siteMap-img" src={imageLogout} alt="Logout" />
          </NavLink>
        </section>
      </header>
    );
  }
}
