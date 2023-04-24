import React from "react";
import Ticket from "./Ticket/Ticket";
import TicketPdf from "./TicketPdf/TicketPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Link } from "react-router-dom";
const TicketPage = () => {
  return (
    <div>
      <h2>:) ثبت نام شما با موفقیت انجام شد</h2>
      <Ticket/>
      <PDFDownloadLink document={<TicketPdf/>} fileName="ticket.pdf">دانلود بلیط</PDFDownloadLink>
      <Link to={'/'}>رفتن به صفحه دوره</Link>
    </div>
  );
};

export default TicketPage;
