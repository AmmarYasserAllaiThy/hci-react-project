import React from "react";
import PageNotFoundImage from "./../images/Page-Not-Found.png";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <section className="App-PageNotFound">
      <img
        className="PageNotFoundImage"
        src={PageNotFoundImage}
        alt="Page not found"
      />
    </section>
  );
}
