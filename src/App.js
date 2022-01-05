import "./App.css";
import Container from "./components/container/container";
import Menu from "./components/menu/menu";
import BelowMenu from "./components/menu/belowMenu";

import React from "react";

import Context from "./components/modals/Context";
import {BrowserRouter} from "react-router-dom";

function App() {
  const  background  = React.useContext(Context);
  return (
    // <BrowserRouter>
    <div className="App">
      <div style={{background:`url(${background.background})`}} className="backgr-app"></div>
      <BelowMenu></BelowMenu>
      <Menu></Menu>
      <Container></Container>
    </div>
    // </BrowserRouter>
  );
}

export default App;
