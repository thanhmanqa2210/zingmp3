import Header from "./header/header.container";
import HomePage from "./body_contents/homepage.container";
import "../../css/container.css"
function Container() {
  return (
    <div className="container">
      <Header></Header>
      <HomePage></HomePage>
    </div>
  );
}
export default Container;
