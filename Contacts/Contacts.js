import React from "react";
import AmmarImage from "./../images/ammar.jpg";
import BasantImage from "./../images/basant.jpg";
import ShadyImage from "./../images/shady.jpg";
import KhairImage from "./../images/5er.jpg";
import NadaImage from "./../images/nada.jpg";
import MagdyImage from "./../images/magdy.jpg";
import "./Contacts.css";
import Facebook from "./../images/facebook.png";
import Linked from "./../images/linkedin.png";
import Twitter from "./../images/twitter.png";

export default class Contacts extends React.Component {
  render() {
    return (
      <section className="App-contacts" id="contacts-sec">
        {/* new layout design */}
        <section className="new-author">
          <center>
            <img className="new-author-photo" src={BasantImage} alt="Ammar" />
          </center>
          <a href="https://www.facebook.com/basant.roes">
            <img className="social-media-icons" src={Facebook} alt="Icon" />
          </a>
          <img className="social-media-icons" src={Linked} alt="Icon" />
          <img className="social-media-icons" src={Twitter} alt="Icon" />
          <p className="new-author-name">Basant</p>
        </section>

        <section className="new-author">
          <center>
            <img className="new-author-photo" src={AmmarImage} alt="Ammar" />
          </center>
          <a href="https://www.facebook.com/AmmarPiNYasser">
            <img className="social-media-icons" src={Facebook} alt="Icon" />
          </a>
          <img className="social-media-icons" src={Linked} alt="Icon" />
          <img className="social-media-icons" src={Twitter} alt="Icon" />
          <p className="new-author-name">Ammar</p>
        </section>

        <section className="new-author">
          <center>
            <img className="new-author-photo" src={ShadyImage} alt="Ammar" />
          </center>
          <a href="https://www.facebook.com/shadyy.aref">
            <img className="social-media-icons" src={Facebook} alt="Icon" />
          </a>
          <img className="social-media-icons" src={Linked} alt="Icon" />
          <img className="social-media-icons" src={Twitter} alt="Icon" />
          <p className="new-author-name">Shady</p>
        </section>

        <section className="new-author">
          <center>
            <img className="new-author-photo" src={KhairImage} alt="Ammar" />
          </center>
          <a href="https://www.facebook.com/AbouElkhair.Rady">
            <img className="social-media-icons" src={Facebook} alt="Icon" />
          </a>
          <img className="social-media-icons" src={Linked} alt="Icon" />
          <img className="social-media-icons" src={Twitter} alt="Icon" />
          <p className="new-author-name">Abouelkhair</p>
        </section>

        <section className="new-author">
          <center>
            <img className="new-author-photo" src={NadaImage} alt="Ammar" />
          </center>
          <a href="https://www.facebook.com/Nada.Elshami9">
            <img className="social-media-icons" src={Facebook} alt="Icon" />
          </a>
          <img className="social-media-icons" src={Linked} alt="Icon" />
          <img className="social-media-icons" src={Twitter} alt="Icon" />
          <p className="new-author-name">Nada</p>
        </section>

        <section className="new-author">
          <center>
            <img className="new-author-photo" src={MagdyImage} alt="Ammar" />
          </center>
          <a href="https://www.facebook.com/profile.php?id=100006389679312">
            <img className="social-media-icons" src={Facebook} alt="Icon" />
          </a>
          <img className="social-media-icons" src={Linked} alt="Icon" />
          <img className="social-media-icons" src={Twitter} alt="Icon" />
          <p className="new-author-name">Mohammed</p>
        </section>

        {/* new layout design */}

        {/*
        <section className="new-author">
          <img className="new-author-photo" src={BasantImage} alt="Ammar" />
          <p className="new-author-name">Basant</p>
          <a href="https://www.facebook.com/basant.roes">
            <img className="social-media-icons" src={Facebook} />
          </a>
          <img className="social-media-icons" src={Linked} />
          <img className="social-media-icons" src={Twitter} />
        </section>

        <section className="author">
          <img className="author-photo" src={AmmarImage} alt="Ammar" />
          <p className="author-name">Ammar</p>
          <a href="https://www.facebook.com/AmmarPiNYasser">
            <img className="social-media-icons" src={Facebook} />
          </a>
          <img className="social-media-icons" src={Linked} />
          <img className="social-media-icons" src={Twitter} />
        </section>

        <section className="author">
          <img className="author-photo" src={ShadyImage} alt="Ammar" />
          <p className="author-name">Shady</p>
          <img className="social-media-icons" src={Facebook} />
          <img className="social-media-icons" src={Linked} />
          <img className="social-media-icons" src={Twitter} />
        </section>

        <section className="author">
          <img className="author-photo" src={KhairImage} alt="Ammar" />
          <p className="author-name">Abouelkhair</p>
          <a href="https://www.facebook.com/AbouElkhair.Rady">
            <img className="social-media-icons" src={Facebook} />
          </a>
          <img className="social-media-icons" src={Linked} />
          <img className="social-media-icons" src={Twitter} />
        </section>

        <section className="author">
          <img className="author-photo" src={NadaImage} alt="Ammar" />
          <p className="author-name">Nada</p>
          <a href="https://www.facebook.com/Nada.Elshami9">
            <img className="social-media-icons" src={Facebook} />
          </a>
          <img className="social-media-icons" src={Linked} />
          <img className="social-media-icons" src={Twitter} />
        </section>

        <section className="author">
          <img className="author-photo" src={MagdyImage} alt="Ammar" />
          <p className="author-name">Mohammed</p>
          <a href="https://www.facebook.com/profile.php?id=100006389679312">
            <img className="social-media-icons" src={Facebook} />
          </a>
          <img className="social-media-icons" src={Linked} />
          <img className="social-media-icons" src={Twitter} />
        </section>
        */}
      </section>
    );
  }
}
