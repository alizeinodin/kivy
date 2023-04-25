import React from "react";
import Ticket from "./Ticket/Ticket";
import TicketPdf from "./TicketPdf/TicketPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Link } from "react-router-dom";
import './TicketPage.css'
const TicketPage = () => {
  return (
    <div className="TicketPage">
      <h2 className="TicketPage-title"> ثبت نام شما با موفقیت انجام شد</h2>
      <Ticket />
      <PDFDownloadLink
        document={<TicketPdf />}
        fileName="ticket.pdf"
        className="TicketPage-downloadLink"
      >
        دانلود بلیط
      </PDFDownloadLink>
      <Link to={"/"} className="TicketPage-link">
        رفتن به صفحه دوره
      </Link>
    </div>
  );
};

export default TicketPage;
