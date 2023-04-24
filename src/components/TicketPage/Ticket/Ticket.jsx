const Ticket = () => {
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
      <div className="ticket-detail"></div>
      {/* --------------------------------------------- */}
      <div className="ticket-line"></div>
      {/* --------------------------------------------------- */}

      <div className="ticket-barcode">
        <img src="" alt="" className="ticket-barcode-img" />
        <div className="ticket-barcode-code">
          <span>کد رهگیری ثبت نام</span>
          <div className="barcode">
            <span> 12358746985325 </span>
            {/* icon for copy */}
          </div>
        </div>
      </div>
      {/* --------------------------------------------------- */}
    </div>
  );
};

export default Ticket;
