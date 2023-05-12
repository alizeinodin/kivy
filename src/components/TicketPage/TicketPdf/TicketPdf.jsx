import {
  View,
  Text,
  Image,
  Document,
  Page,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import TicketPdfDetail from "./TicketPdfDetail/TicketPdfDetail";
import React, { useState, useContext ,useEffect} from "react";
import { TicketContext } from "../TicketPage";
import logo from "./../../../imgs/tempimg/back-in-time.png";
import QR from "./../../../imgs/tempimg/qr-code.png";
import vazirRegular from "./../../../fonts/fonts/ttf/Vazirmatn-Regular.ttf";
import vazirLight from "./../../../fonts/fonts/ttf/Vazirmatn-Light.ttf";
import sgReg from "./../../../fonts/SGKara-Regular_p30download.com.ttf";
const TicketPdf = ({course_name,student_name,qrcode}) => {
  console.log(course_name,student_name,qrcode)
  const p=useContext(TicketContext)
  console.log(p)
  const [detail, setDetail] = useState([
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
  const [code, setCode] = useState(123698532585757);
  Font.register({ family: "Vazirmatn Light", src: vazirLight });
  Font.register({ family: "Vazirmatn Regular", src: vazirRegular });
  Font.register({ family: "SGKara Regular", src: sgReg });

  const style = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#eaeaea",
    },
    ticket: {
      width: "330px",
      height: "450px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      borderRadius: "16px",
      backgroundColor: "#fff",
    },
    ticketHeader: {
      width: "330px",
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "#001834",
      height: "120px",
      borderTopRightRadius: "16px",
      borderTopLeftRadius: "16px",
    },
    ticketHeaderImg: {
      height: "64px",
      width: "64px",
    },
    ticketHeaderContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    ticketHeaderTitle: {
      fontFamily: "Vazirmatn Light",
      fontSize: "14px",
      color: "#d2d2d2",
    },
    ticketHeaderHeading: {
      fontSize: "18px",
      color: "#fff",
      fontFamily: "SGKara Regular",
    },
    ticketDetail: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flexWap: "wrap",
      alignItems: "flex-end",
      paddingTop: "40px",
      paddingRight: "20px",
      alignSelf: "flex-end",
    },
    ticketLine: {
      display: "flex",
      flexDirection: "row-reverse",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "32px",
    },
    circleRight: {
      content: "",
      width: "20px",
      height: "40px",
      borderTopRightRadius: "0px",
      borderTopLeftRadius: "30px",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "0px",
      backgroundColor: "#eaeaea",
    },
    line: {
      content: "",
      width: "330px",
      border: "1 dashed gray",
    },
    circleLeft: {
      content: "",
      width: "20px",
      height: "40px",
      borderTopRightRadius: "30px",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "30px",
      backgroundColor: "#eaeaea",
    },
    ticketBarcode: {
      display: "flex",
      flexDirection: "row-reverse",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-evenly",
      paddingBottom: "16px",
    },
    ticketBarcodeImg: {
      height: "64px",
      width: "64px",
    },
    tickeBarcodeCode: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    ticketBarcodeCodeTitle: {
      fontSize: "12",
      color: "#000",
      fontFamily: "Vazirmatn Regular",
    },
    barcode: {
      width: "130px",
      height: "24px",
      border: "1px solid gray",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      flexDirection: "row-reverse",
      justifyContent: "space-evenly",
    },
    barcodeCode: {
      fontSize: "12px",
      color: "#000",
    },
    copyIcon: {
      color: "#000 !important",
    },
  });
  return (
    <Document>
      <Page size={"A5"} style={style.page}>
        <View style={style.ticket}>
          <View style={style.ticketHeader}>
            <Image source={logo} style={style.ticketHeaderImg} />
            <View style={style.ticketHeaderContent}>
              <Text style={style.ticketHeaderTitle}>بلیط حضور در</Text>
              <Text style={style.ticketHeaderHeading}>{course_name}</Text>
            </View>
          </View>
          {/* --------------------------------------------------- */}
          <View style={style.ticketDetail}>
            <TicketPdfDetail
              id={1}
              title={"نام و نام خانوادگی"}
              content={student_name}
            />
            {detail.map((item) => (
              <TicketPdfDetail key={item.id} {...item} />
            ))}
          </View>
          {/* --------------------------------------------- */}
          <View style={style.ticketLine}>
            <View style={style.circleRight}></View>
            <View style={style.line}></View>
            <View style={style.circleLeft}></View>
          </View>
          {/* --------------------------------------------------- */}

          <View style={style.ticketBarcode}>
            <Image
              source={`https://kiwi.ssceb.ir/${qrcode}`}
              style={style.ticketBarcodeImg}
            />
            <View style={style.tickeBarcodeCode}>
              <Text style={style.ticketBarcodeCodeTitle}>
                کد رهگیری ثبت نام
              </Text>
              <Text style={style.barcodeCode}> {code} </Text>
            </View>
          </View>
          {/* --------------------------------------------------- */}
        </View>
      </Page>
    </Document>
  );
};
export default TicketPdf;
