import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./search.header";
import Options from "./options.header";
function Header() {
  const [backgr, setBackgr] = useState({});
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0)
        setBackgr({
          backgroundColor: "rgb(55, 7, 93)",
          border: "1px solid rgb(55, 7, 93)",
          boxShadow: "10px 1px 5px rgb(45, 5, 78)",
        });
      else {
        setBackgr({
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div style={backgr} className="header">
      <Router>
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
