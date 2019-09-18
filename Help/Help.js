import React from "react";
import { NavLink } from "react-router-dom";
import emailImage from "./../images/send-mail.png";
import "./Help.css";

export default class Contact extends React.Component {
  render() {
    return (
      <section className="App-help" id="help-sec">
        <section className="help-left-sec">
          <h1 className="help-left-h1">Get In Touch and Message Us For Help</h1>
          <img
            className="help-left-image"
            src={emailImage}
            alt="Get in touch"
          />
        </section>

        <section className="help-right-sec">
          <h1 className="formTitle">Send Us a Message</h1>
          <form method="post" action="#">
            <input
              className="inputFields"
              type="text"
              placeholder="Name *"
              name="name"
              required
            />
            <input
              className="inputFields"
              type="email"
              placeholder="Email *"
              name="email"
              required
            />
            <textarea
              className="inputFields help-textarea"
              type="Message"
              placeholder="Ur Message or question *"
              name="message"
              required
            />
            <input
              className="inputFields"
              type="text"
              placeholder="Any additional comments"
              name="comments"
            />
            <NavLink className="NavLink" to="send-submit">
              <input type="submit" value="Send" className="inputSubmit" />
            </NavLink>
          </form>
        </section>
      </section>
    );
  }
}
