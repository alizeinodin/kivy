import TicketDetail from "./TicketDetail/TicketDetail";
import React, { useState } from "react";
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
  return (
    <div className="ticket">
      <div className="ticket-header">
        <img className="ticket-header-img" />
        <div className="ticket-header-content">
          <span className="ticket-header-title">بلیط حضور در</span>
          <h1 className="ticket-header-heading">دوره آموزش فتوشاپ</h1>
        </div>
      </div>
      {/* --------------------------------------------------- */}
      <div className="ticket-detail">
        {detail.map((item) => (
          <TicketDetail key={item.id} {...item} />
        ))}
      </div>
      {/* --------------------------------------------- */}
      <div className="ticket-line"></div>
      {/* --------------------------------------------------- */}

      <div className="ticket-barcode">
        <img src="" alt="" className="ticket-barcode-img" />
        <div className="ticket-barcode-code">
          <span>کد رهگیری ثبت نام</span>
          <div className="barcode">
            <span> 1236985325 </span>
            {/* icon for copy */}
          </div>
        </div>
      </div>
      {/* --------------------------------------------------- */}
    </div>
  );
};

export default Ticket;
