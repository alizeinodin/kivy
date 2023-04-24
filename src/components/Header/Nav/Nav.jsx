import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "./Nav.css";
const Nav = () => {
  const navContainer = useRef(null);
  // useLayoutEffect(() => {
  //   const navTop = navContainer.current.getBoundingClientRect().top;
  //   const onScroll = () => {
  //     if (navTop < window.scrollY && window.innerWidth > 768) {
  //       console.log("ok");
  //       navContainer.current.style.position = "fixed";
  //       navContainer.current.style.zIndex = 1000;
  //       navContainer.current.style.width = "100vw";
  //       navContainer.current.style.marginTop = "0";
  //     } else {
  //       navContainer.current.style.position = "relative";
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  const linkRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav
      className={`NavContainer ${showMenu ? "NavContainerActive" : null}`}
      ref={navContainer}
    >
      <div
        className="NavBtn"
        onClick={() => {
          linkRef.current.style.display = showMenu ? "flex" : "none";
          setShowMenu(!showMenu);
        }}
      >
        <span
          className={`NavBtnLine ${showMenu ? "NavBtnLineActive" : null}`}
        ></span>
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
