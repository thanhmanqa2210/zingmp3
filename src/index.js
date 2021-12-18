import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PlayMusic from "./components/playMusic/playMusic.footer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <PlayMusic />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
