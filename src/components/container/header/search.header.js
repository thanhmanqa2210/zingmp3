import { useState } from "react";
import OnFocus from "./onfocus.search";
function Search() {
  let [style, setStyle] = useState({});
  let [display, setDisplay] = useState({
    display: "none",
  });

  return (
    <div>
      <div className="search" style={style}>
        <input
          type="text"
          placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
          className="search-song"
          onFocus={() => {
            setStyle({
              backgroundColor: "rgb(106,57,175)",
              height: "280px",
              borderRadius: "20px",
              display: "block",
            });
            setDisplay({
              display: "flex",
            });
          }}
          onBlur={() => {
            setStyle({ backgroundColor: "rgba(255, 255, 255, .15)" });
            setDisplay({
              display: "none",
            });
          }}
        />
        <i className="fas fa-search search-icon" />

        <OnFocus display={display}>
          <h3 style={{ margin: "0px" }}>Đề xuất cho bạn</h3>
        </OnFocus>
      </div>
    </div>
  );
}
export default Search;
