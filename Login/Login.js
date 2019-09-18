import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      repassword: ""
    };
  }

  state = {
    name: "",
    email: "",
    password: "",
    repassword: ""
  };

  handleLogin = e => {
    // let email = this.state.email;
    // let pass = this.state.password;
    // if (email === "ammar@yasser.com" && pass === "ammar")
    //   document.getElementById("loginBtn").setAttribute("to", "/Cart");
  };

  handleRegister = e => {
    // let name = this.state.name;
    // let email = this.state.email;
    // let pass = this.state.password;
    // let repass = this.state.repassword;
    // if (name !== "" && email !== "" && pass !== "" && repass !== "")
    //   if (pass == repass) {
    //     var login = document.getElementById("loginBtn");
    //     login.setAttribute("to", "cart");
    //     console.log(login.getAttribute("to"));
    //   }
  };

  render() {
    return (
      <section className="App-login">
        <section id="login">
          <h1 className="formTitle">Login</h1>
          <form onSubmit={() => this.handleLogin()}>
            <input
              className="inputFields"
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              className="inputFields"
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={e => this.setState({ password: e.target.value })}
            />
            <NavLink className="NavLink" id="loginBtn" to="product-sec">
              <input type="submit" value="Login" className="inputSubmit" />
            </NavLink>
          </form>
        </section>

        <section id="register">
          <h1 className="formTitle">Register</h1>
          <form onSubmit={() => this.handleRegister()}>
            <input
              className="inputFields"
              type="text"
              placeholder="Name"
              name="name"
              required
              onChange={e => this.setState({ name: e.target.value })}
            />
            <input
              className="inputFields"
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              className="inputFields"
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={e => this.setState({ password: e.target.value })}
            />
            <input
              className="inputFields"
              type="password"
              placeholder="re-Password"
              name="re-password"
              required
              onChange={e => this.setState({ repassword: e.target.value })}
            />
            <NavLink className="NavLink" id="loginBtn" to="product-sec">
              <input type="submit" value="Register" className="inputSubmit" />
            </NavLink>
          </form>
        </section>
      </section>
    );
  }
}
