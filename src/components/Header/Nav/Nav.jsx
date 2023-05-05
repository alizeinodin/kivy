import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "./Nav.css";
const Nav = ({
  ScrollCourseIntroductionRef,
  ScrollCourseTopicsRef,
  ScrollIntroducingInstructorRef,
  ScrollFooterRef,
}) => {
  const navContainer = useRef(null);
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
          linkRef.current.style.display = showMenu ? "none" : "flex";
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
          // onClick={() => {
          //   console.log("here");
          // }}
        >
          کیوی
        </li>
        <li
          className="NavLink"
          onClick={() => {
            ScrollCourseIntroductionRef();
          }}
        >
          معرفی دوره
        </li>
        <li
          className="NavLink"
          onClick={() => {
            ScrollCourseTopicsRef();
          }}
        >
          سرفصل‌های دوره
        </li>
        <li
          className="NavLink"
          onClick={() => {
            ScrollIntroducingInstructorRef();
          }}
        >
          مدرس دوره
        </li>
        <li
          className="NavLink"
          onClick={() => {
            ScrollFooterRef();
          }}
        >
          راه‌های ارتباطی
        </li>
        <li className="NavLink"><a href="http://ssces.barfenow.ir/">ثبت نام</a> </li>
      </ul>
    </nav>
  );
};

export default Nav;
