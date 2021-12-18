import Header from "./header/header.container";
import HomePage from "./body_contents/homepage.container";
import "../../scss/container.scss"
function Container() {
  return (
    <div className="container">
      <Header></Header>
      <HomePage></HomePage>
    </div>
  );
}
export default Container;
