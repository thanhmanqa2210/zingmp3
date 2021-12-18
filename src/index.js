import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import PlayMusic from "./components/playMusic/playMusic.footer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <PlayMusic /> */}
    <h2>XIn chào các</h2>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
