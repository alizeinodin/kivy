import Nav from "./Nav/Nav";
// import { Link } from "react-router-dom";
import React from "react";
const Header = () => {
  return (
    <div className="Header">
      <Nav />
      <div className="Header-title">
        <h1 className="Header-title">دوره آموزش جامع فتوشاپ از صفر تا صد</h1>
        <p className="Header-description">
          همراه با اعطای مدرک معتبر از طرف انجمن علمی مهندسی کامپیوتر دانشگاه
          بوعلی سینا
        </p>
        {/* <Link>ثبت نام در دوره</Link> */}
        <button className="Header-btn">ثبت نام در دوره</button>
      </div>
    </div>
  );
};

export default Header;
