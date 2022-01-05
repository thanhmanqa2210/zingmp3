import "./App.css";
import Container from "./components/container/container";
import Menu from "./components/menu/menu";
import BelowMenu from "./components/menu/belowMenu";
// import { useState } from "react";
import React from "react";
// import { images } from "./components/data/theme";
import Context from "./components/modals/Context";

function App() {
  const  background  = React.useContext(Context);
  return (
    <div className="App">
      <div style={{background:`url(${background.background})`}} className="backgr-app"></div>
      <BelowMenu></BelowMenu>
      <Menu></Menu>
      <Container></Container>
    </div>
  );
}

export default App;
