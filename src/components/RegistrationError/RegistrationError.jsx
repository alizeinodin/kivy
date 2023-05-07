import cancel from "./../../imgs/cancel.png";
import "./RegistrationError.css";
import React, { useEffect, useState } from "react";
const RegistrationError = () => {
  return (
    <div className="RegistrationError-container">
      <div className="RegistrationError-header">
        <img className="RegistrationError-icon" src={cancel} />
        <span className="RegistrationError-title">خطا</span>
      </div>
      <div className="RegistrationError-footer">
        <p className="RegistrationError-text">
          دانشجو در دوره ثبت نام نکرده است.
        </p>
      </div>
    </div>
  );
};

export default RegistrationError;
