import Footer from "../Footer/Footer";
import CourseTopics from "../CourseTopics/CourseTopics";
import EventPlace from "../EventPlace/EventPlace";
import CourseFeatures from "../CourseFeatures/CourseFeatures";
import CourseIntroduction from "../CourseIntroduction/CourseIntroduction";
import IntroducingInstructor from "../IntroducingInstructor/IntroducingInstructor";
import CourseDetails from "../CourseDetails/CourseDetails";
import Header from "../Header/Header";
import "./IntroPage.css";
import React, { useRef } from "react";
const IntroPage = () => {
  const CourseIntroductionRef = useRef(null);
  const CourseTopicsRef = useRef(null);
  const IntroducingInstructorRef = useRef(null);
  const FooterRef = useRef(null);
  const ScrollCourseIntroductionRef = () => {
    CourseIntroductionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const ScrollCourseTopicsRef = () => {
    CourseTopicsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const ScrollIntroducingInstructorRef = () => {
    IntroducingInstructorRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const ScrollFooterRef = () => {
    FooterRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="KiwiContainer">
      <div>
        <Header
          ScrollCourseIntroductionRef={ScrollCourseIntroductionRef}
          ScrollCourseTopicsRef={ScrollCourseTopicsRef}
          ScrollIntroducingInstructorRef={ScrollIntroducingInstructorRef}
          ScrollFooterRef={ScrollFooterRef}
        />
      </div>
      <div>
        <CourseDetails />
      </div>
      <div ref={IntroducingInstructorRef}>
        <IntroducingInstructor />
      </div>
      <div ref={CourseIntroductionRef}>
        <CourseIntroduction />
      </div>
      <div className="CourseFeaturesSection">
        <CourseFeatures />
      </div>
      <EventPlace />
      <div ref={CourseTopicsRef}>
        <CourseTopics />
      </div>
      <div className="FooterSection" ref={FooterRef}>
        <Footer />
      </div>
    </div>
  );
};

export default IntroPage;
