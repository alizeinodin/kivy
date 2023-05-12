import check from "./../../imgs/check-mark.png";
import error from "./../../imgs/cancel.png";
import "./RegisterSuccessfully.css";
import React, { useEffect, useState } from "react";
import sound from "./../../sounds/Bulletin.mp3";
import sound1 from "./../../sounds/Input.mp3";
import { useLocation } from "react-router-dom";
import BaseUrl from "../BaseUrl";
const RegisterSuccessfully = () => {
  const path = useLocation().pathname.split("/");
  const idCourse = path[path.length - 3];
  const idStudent = path[path.length - 2];
  const [data, setData] = useState({});
  useEffect(() => {
    BaseUrl.get(`/ticket/${idCourse}/${idStudent}`)
      .then((res) => {
        setData(res.data);
        if (res.status === 200) {
          setIisSuccess(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const [isSuccess, setIisSuccess] = useState(false);
  return (
    <div
      className={
        isSuccess
          ? "RegisterSuccessfully-container"
          : "RegistrationError-container"
      }
    >
      <audio src={isSuccess ? sound : sound1} autoPlay />
      <div
        className={
          isSuccess ? "RegisterSuccessfully-header" : "RegistrationError-header"
        }
      >
        <img
          className={
            isSuccess ? "RegisterSuccessfully-icon" : "RegistrationError-icon"
          }
          src={isSuccess ? check : error}
        />
        <span
          className={
            isSuccess ? "RegisterSuccessfully-title" : "RegistrationError-title"
          }
        >
          {isSuccess ? "تایید" : "خطا"}
        </span>
      </div>
      <div
        className={
          isSuccess ? "RegisterSuccessfully-footer" : "RegistrationError-footer"
        }
      >
        <p
          className={
            isSuccess ? "RegisterSuccessfully-text" : "RegistrationError-text"
          }
        >
          {isSuccess
            ? ` دانشجو  ${data.student_name}با موفقیت در  ${data.course_name} ثبت نام کرده است.`
            : " دانشجو در دوره ثبت نام نکرده است."}
        </p>
      </div>
    </div>
  );
};

export default RegisterSuccessfully;
