import React, { Fragment, useRef } from "react";
import Slider from "./Slider/Slider";
import icon from "./../../imgs/tempimg/abstract.png";
import teacher from "./../../imgs/tempimg/400x500 (2).png";
const IntroducingInstructor = () => {
  return (
    <div className="IntroducingInstructor">
      <div className="IntroducingInstructor-header">
        <img src={icon} className="IntroducingInstructor-header-img" />
        <p className="IntroducingInstructor-header-title">معرفی مدرس</p>
      </div>
      <div className="IntroducingInstructor-content">
        <img src={teacher} className="IntroducingInstructor-content-img" />
        <Slider />
      </div>
    </div>
  );
};

export default IntroducingInstructor;
