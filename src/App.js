import "./App.css";
import Container from "./components/container/container";
import Menu from "./components/menu/menu";
import BelowMenu from "./components/menu/belowMenu";
function App() {
  return (
    <div className="App">
      <div className="backgr-app"></div>
      <BelowMenu></BelowMenu>
      <Menu></Menu>
      <Container></Container>
    </div>
  );
}

export default App;
