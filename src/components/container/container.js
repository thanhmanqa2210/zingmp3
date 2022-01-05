import Header from "./header/header.container";
import HomePage from "./body_contents/homepage.container";
import "../../css/container.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Person from "./body_contents/PerAccount.container";
function Container() {
  return (
    <div className="container">
      <Header></Header>
        <HomePage></HomePage>
        <Person></Person>
        {/* <Route path="/" exact component={HomePage}></Route> */}
    </div>
  );
}
export default Container;
