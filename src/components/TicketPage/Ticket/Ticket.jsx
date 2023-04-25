import TicketDetail from "./TicketDetail/TicketDetail";
import React, { useState } from "react";
import "./Ticket.css";
import logo from "./../../../imgs/tempimg/back-in-time.png";
import QR from "./../../../imgs/tempimg/qr-code.png";
import { RxCopy, RxCheck } from "react-icons/rx";
const Ticket = () => {
  const [detail, setDetail] = useState([
    {
      id: 1,
      title: "نام و نام خانوادگی",
      content: "دانشجوی بوعلی",
    },
    {
      id: 2,
      title: "تاریخ برگزاری",
      content: "دهم اردیبهشت 1402",
    },
    {
      id: 3,
      title: "محل برگزاری",
      content: "کارگاه کامپیوتر دانشکده مهندسی",
    },
    { id: 4, title: "مدرس دوره", content: "محمد مرادی " },
  ]);
  const [code, setCode] = useState("123698532585757");
  const [isCopy, setIscopy] = useState(false);
  return (
    <div className="ticket">
      <div className="ticket-header">
        <img className="ticket-header-img" src={logo} />
        <div className="ticket-header-content">
          <span className="ticket-header-title">بلیط حضور در</span>
          <h1 className="ticket-header-heading">دوره آموزش فتوشاپ</h1>
        </div>
      </div>
      {/* --------------------------------------------------- */}
      <div className="ticket-detail">
        {detail.map((item) => (
          <TicketDetail
            key={item.id}
            {...item}
            className="ticket-detail-item"
          />
        ))}
      </div>
      {/* --------------------------------------------- */}
      <div className="ticket-line">
        <span className="circle-right"></span>
        <span className="line"></span>
        <span className="circle-left"></span>
      </div>
      {/* --------------------------------------------------- */}

      <div className="ticket-barcode">
        <img src={QR} alt="" className="ticket-barcode-img" />
        <div className="ticket-barcode-code">
          <span className="ticket-barcode-code-title">کد رهگیری ثبت نام</span>
          <div
            className="barcode"
            onClick={() => {
              navigator.clipboard.writeText(code).then(() => setIscopy(true));
            }}
          >
            <span className="barcode-code"> {code} </span>
            {isCopy ? (
              <RxCheck className="copy-icon" />
            ) : (
              <RxCopy className="copy-icon" />
            )}
          </div>
        </div>
      </div>
      {/* --------------------------------------------------- */}
    </div>
  );
};

export default Ticket;
