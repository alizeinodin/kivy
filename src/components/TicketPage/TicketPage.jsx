import React, { useEffect, useState, createContext } from "react";
import Ticket from "./Ticket/Ticket";
import TicketPdf from "./TicketPdf/TicketPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Link, useLocation } from "react-router-dom";
import BaseUrl from "../BaseUrl";
import "./TicketPage.css";
import axios from "axios";
export const TicketContext = createContext();
const TicketPage = () => {
  const [data, setData] = useState({});

  const path = useLocation().pathname.split("/");
  const [image, setImage] = useState("");
  const idCourse = path[path.length - 2];
  const idStudent = path[path.length - 1];
  useEffect(() => {
    const req = BaseUrl.get(`ticket/${idCourse}/${idStudent}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

    async function fetchImage() {
      try {
        const response = await BaseUrl.get(
          `ticket/${idCourse}/${idStudent}/qrCode`,
          { responseType: "blob" }
        );
        const imageUrl = URL.createObjectURL(response.data);
        setImage(imageUrl);
      } catch (error) {
        console.error(error);
      }
    }

    fetchImage();

    return () => URL.revokeObjectURL(image);
  }, []);

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    console.log(image);
  }, [data]);
  if (data.qrcode) {
    return (
      <TicketContext.Provider value={data}>
        <div className="TicketPage">
          <h2 className="TicketPage-title"> ثبت نام شما با موفقیت انجام شد</h2>
          <Ticket />
          {data && (
            <PDFDownloadLink
              document={
                <TicketPdf
                  course_name={data.course_name}
                  student_name={data.student_name}
                  qrcode={image}
                />
              }
              fileName="ticket.pdf"
              className="TicketPage-downloadLink"
            >
              دانلود بلیط
            </PDFDownloadLink>
          )}

          <Link to={"/"} className="TicketPage-link">
            رفتن به صفحه دوره
          </Link>
        </div>
      </TicketContext.Provider>
    );
  } else {
    return (
      <TicketContext.Provider value={data}>
        <div className="TicketPage">
          <h2 className="TicketPage-title"> ثبت نام شما با موفقیت انجام شد</h2>
          <Ticket />
          <Link to={"/"} className="TicketPage-link">
            رفتن به صفحه دوره
          </Link>
        </div>
      </TicketContext.Provider>
    );
  }
};

export default TicketPage;
