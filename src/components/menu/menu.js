import "../../css/menu.css";
import "../../css/logo.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {
  PerAccount,
  Explore,
  ZingChart,
  Radio,
  Follow,
} from "./info_music/infoMusic.menu";
function Menu() {
  return (
    <div className="menu">
      <Router>
        <div className="img-logo-link">
          <Link to="/">
            <img
              onClick={() => {}}
              className="img-logo-zingmp3"
              src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
              alt=""
            />
          </Link>
        </div>

        <div className="info-music">
          <Link to="/person">
            <PerAccount />
          </Link>
          <Link to="/homepage">
            <Explore />
          </Link>
          <Link to="/zingchart">
            <ZingChart />
          </Link>
          <Link to="/radio">
            <Radio />
          </Link>
          <Link to="/follow">
            <Follow />
          </Link>
        </div>
      </Router>
    </div>
  );
}
export default Menu;
