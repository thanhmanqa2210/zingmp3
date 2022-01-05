import shirt_topic from "../../../../img/shirt_topic.png";
import uploadIcon from "../../../../img/uploadIcon.png";
import settingIcon from "../../../../img/settingIcon.png";
import * as theme from "../../../data/theme";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Context from "../../../modals/Context";
const Icon = styled.i`
  display: flex;
  font-size: 30px;
  margin: 10px 15px;
  position: absolute;
  cursor: pointer;
  right: 0;
`;
const ThemeList = styled.div`
  margin: 10px 30px;
  h3 {
    line-height: 30px;
    font-size: 20px;
    font-weight: 500;
    cursor: text;
  }
  .topic {
    display: flex;
    flex-wrap: wrap;
  }
`;
const ThemeItem = styled.div`
  margin: 10px 35px 10px 0;
  display: flex;
  flex-direction: column;
  span {
    line-height: 30px;
    cursor: text;
    text-align: center;
  }
  img {
    width: 150px;
    height: 100px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #222222;
  }
`;
const Apply = styled.div`
  display: none;
  position: absolute;
  margin: 30px 35px;
  border: 1px solid #000;
  line-height: 25px;
  padding: 0px 10px 2px;
  border-radius: 20px;
  cursor: pointer;
  ${ThemeItem}:hover & {
    display: flex;
  }
`;
export default function ThemeProvider({ children }) {
  const background = { background: theme.images[0].thumbnail };

  return <Context.Provider value={background}>{children}</Context.Provider>;
}

function ThemeTopic({ display }, displayoff) {
  let [background, setBackgr] = useState(theme.images[0]);
  let [displays, setDis] = useState("none");
  useEffect(() => {
    display.display==='flex'?setDis('flex'):setDis('none');
  }, [display.display]);
  let Div = styled.div`
    display: ${displays ==='flex'?'flex':'none'};
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    cursor: default;
    .theme {
      background: url("${background.thumbnail}") no-repeat center;
      position: relative;
      width: 1000px;
      height: 600px;
      border-radius: 7px;
      margin: auto;
      .title-times {
        display: flex;
        span {
          margin: 10px 30px;
          line-height: 35px;
          font-size: 30px;
          cursor: text;
        }
      }
    }
  `;

  return (
    <Div>
      <div className="theme">
        <div className="title-times">
          <span
            style={{ color: background.color === "light" ? "#111" : "#fff" }}
          >
            Giao Diện
          </span>
          <Icon
            style={{ color: background.color === "light" ? "#111" : "#fff" }}
            className="fas fa-times icon-times"
          />
        </div>
        <ThemeList>
          <h3 style={{ color: background.color === "light" ? "#111" : "#fff" }}>
            Chủ đề
          </h3>
          <div className="topic">
            {theme.images.map((themeItem) => (
              <ThemeItem>
                <img src={themeItem.thumbnail} alt="" />
                <Apply
                  style={{
                    color: themeItem.color === "light" ? "#111" : "#fff",
                  }}
                  onClick={() => {
                    setBackgr(theme.images[themeItem.id]);
                    setDis('none');
                  }}
                >
                  áp dụng
                </Apply>
                <span
                  style={{
                    color: background.color === "light" ? "#111" : "#fff",
                  }}
                >
                  {themeItem.label}
                </span>
              </ThemeItem>
            ))}
          </div>
        </ThemeList>
      </div>
    </Div>
  );
}
function Topic() {
  const [displays, setDisplay] = useState({ display: "none" });
  const callbackDisplay = (display) => {
    setDisplay({ display: display });
  };
  return (
    <div
      onClick={() => displays.display==='none'?setDisplay({ display: "flex" }):setDisplay({ display: "none" })}
      className="option-item topic"
      datatype="Chủ đề"
    >
      <div className="topic-img">
        <img src={shirt_topic} alt="" />
      </div>
      <ThemeTopic displayoff={callbackDisplay} display={displays}></ThemeTopic>
    </div>
  );
}
function Upload() {
  return (
    <div className="option-item upload" datatype="Tải lên">
      <div className="upload-img">
        <img src={uploadIcon} alt="" />
      </div>
    </div>
  );
}
function Setting() {
  return (
    <div className="option-item setting" datatype="Cài đặt">
      <div className="setting-img">
        <img src={settingIcon} alt="" />
      </div>
    </div>
  );
}
function User() {
  return <div className="option-item user"></div>;
}
export { Topic, Upload, Setting, User, ThemeTopic };
