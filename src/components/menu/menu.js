import "../../css/menu.css";
import "../../css/logo.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  PerAccount,
  Explore,
  Radio,
  ZingChart,
  Follow,
} from "./info_music/infoMusic.menu";
function Menu() {
  return (
    <div className="menu">
      <Router>
        <div className="img-logo-link">
          <Link to="/">
            <img
              className="img-logo-zingmp3"
              src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
              alt=""
            />
          </Link>
        </div>
      </Router>
      <div className="info-music">
        <PerAccount></PerAccount>
        <Explore></Explore>
        <ZingChart></ZingChart>
        <Radio></Radio>
        <Follow></Follow>
      </div>
    </div>
  );
}
export default Menu;
