import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import * as firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyCqhhILTlD16slfZwdsiocV7g2_MJtbM68",
//   authDomain: "hci-react-project.firebaseapp.com",
//   databaseURL: "https://hci-react-project.firebaseio.com",
//   projectId: "hci-react-project",
//   storageBucket: "hci-react-project.appspot.com",
//   messagingSenderId: "373958901649",
//   appId: "1:373958901649:web:58d1146fb77c0e05"
// };
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
