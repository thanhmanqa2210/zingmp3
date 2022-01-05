import styled from "styled-components";
import HomePage from "../../container/body_contents/homepage.container";
import { BrowserRouter as Router, Route } from "react-router-dom";
const TitleSpan = styled.span`
  font-size: 20px;
`;
function PerAccount() {
  return (
    <div className="music-item">
      <TitleSpan>Cá Nhân</TitleSpan>
    </div>
  );
}
function Explore() {
  return (
    <div className="music-item">
      <TitleSpan>Khám Phá</TitleSpan>
    </div>
  );
}
function ZingChart() {
  return (
    <div className="music-item">
      <TitleSpan>#zingchart</TitleSpan>
    </div>
  );
}
function Radio() {
  return (
    <div className="music-item">
      <TitleSpan>Radio</TitleSpan>
    </div>
  );
}
function Follow() {
  return (
    <div className="music-item">
      <TitleSpan>Theo dõi</TitleSpan>
    </div>
  );
}
export { PerAccount, Explore, ZingChart, Radio, Follow };
