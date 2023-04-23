import React, { useRef, useState } from "react";
import "./Nav.css";
const Nav = () => {
  const linkRef = useRef(null);
  const linekRef = useRef(null);
  const container = useRef(null);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="NavContainer" ref={container}>
      <div
        className="NavBtn"
        onClick={() => {
          linkRef.current.style.display = showMenu ? "block" : "none";
          linekRef.current.className = showMenu
            ? "NavBtnLine NavBtnLineActive"
            : "NavBtnLine";
            container.current.className = showMenu
            ? "NavContainer NavContainerActive"
            : "NavContainer";
          setShowMenu(!showMenu);
        }}
      >
        <span className="NavBtnLine" ref={linekRef}></span>
      </div>
      <ul className="NavLinks" ref={linkRef}>
        <li
          className="NavLink"
          onClick={() => {
            console.log("here");
          }}
        >
          کیوی
        </li>
        <li className="NavLink">معرفی دوره</li>
        <li className="NavLink">سرفصل‌های دوره</li>
        <li className="NavLink">مدرس دوره</li>
        <li className="NavLink">راه‌های ارتباطی</li>
        <li className="NavLink">ثبت نام</li>
      </ul>
    </nav>
  );
};

export default Nav;
