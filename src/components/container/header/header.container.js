import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "./search.header";
import Options from "./options.header";
function Header() {
  return (
    <div className="header">
      <Router >
        <div className="header-back-next">
          <Link to="../container.js" className="header-back">
            <i className="fas fa-long-arrow-alt-left" />
          </Link>
          <Link to="../container.js" className="header-next">
            <i className="fas fa-long-arrow-alt-right" />
          </Link>
        </div>
      </Router>
      <Search></Search>
      <Options></Options>
    </div>
  );
}
export default Header;
