import check from "./../../imgs/check-mark.png";
import "./RegisterSuccessfully.css";
import React from "react";
import sound from "./../../sounds/Bulletin.mp3";
const RegisterSuccessfully = () => {
    return (
    <div className="RegisterSuccessfully-container">
              <audio  src={sound}  autoPlay/>
      <div className="RegisterSuccessfully-header">
        <img className="RegisterSuccessfully-icon" src={check} />
        <span className="RegisterSuccessfully-title">تایید</span>
      </div>
      <div className="RegisterSuccessfully-footer">
        <p className="RegisterSuccessfully-text">
          دانشجوی مذکور با موفقیت در دوره ثبت نام کرده است.
        </p>
      </div>
    </div>
  );
};

export default RegisterSuccessfully;
