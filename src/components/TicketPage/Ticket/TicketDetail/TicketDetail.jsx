import './TicketDetail.css'
const TicketDetail = ({
  title = "نام و نام خانوادگی",
  content = "دانشجوی بوعلی",
}) => {
  return (
    <div className="TicketDetail">
      <p className="TicketDetail-title">{title}</p>
      <p className="TicketDetail-content">{content}</p>
    </div>
  );
};

export default TicketDetail;
