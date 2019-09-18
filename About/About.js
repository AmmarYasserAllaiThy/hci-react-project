import React from "react";
import "./About.css";

export default class About extends React.Component {
  render() {
    return (
      <section className="App-about" id="about-sec">
        <h1 id="about-title">About Stomata</h1>

        <h2 id="about-sub-title">What is Stomata</h2>
        <p id="about-par">
          Stomata are tiny openings or pros on plant tissue that allows gas
          exchangewhich surely what gives the plant its importance to the earth
        </p>

        <h2 id="about-sub-title">What is Stomata Store</h2>
        <p id="about-par">
          Stomata store once lunched at <b>2018</b> by the releasing the first
          stomata product which is{" "}
          <b>
            CO<sub>2</sub> mobile cover
          </b>{" "}
          after that Stomata store keeps growing by offering enviroment friendly
          products aiming helping a bit solving some Climate change issues
        </p>
      </section>
    );
  }
}
