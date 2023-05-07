import Nav from "./Nav/Nav";
import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <Nav />
      <div className="Header-content">
        <h1 className="Header-title">دوره آموزش جامع فتوشاپ از صفر تا صد</h1>
        <p className="Header-description">
          همراه با اعطای مدرک معتبر از طرف انجمن علمی مهندسی کامپیوتر دانشگاه
          بوعلی سینا
        </p>
        <Link className="Header-btn" to={"/Register"}>
          ثبت نام در دوره
        </Link>
      </div>
    </div>
  );
};

export default Header;
