import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PlayMusic from "./components/playMusic/playMusic.footer";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "../src/components/container/header/options/option"
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    <PlayMusic />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
