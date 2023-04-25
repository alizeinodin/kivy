import {
  View,
  Text,
  StyleSheet,
  Font,
  Document,
  Page,
} from "@react-pdf/renderer";
import vazirRegular from "./../../../../fonts/fonts/ttf/Vazirmatn-Regular.ttf";
import vazirLight from "./../../../../fonts/fonts/ttf/Vazirmatn-Light.ttf";

const TicketPdfDetail = ({
  title = "نام و نام خانوادگی",
  content = "دانشجوی بوعلی",
}) => {
  Font.register({ family: "Vazirmatn Light", src: vazirLight });
  Font.register({ family: "Vazirmatn Regular", src: vazirRegular });
  const style = StyleSheet.create({
    TicketDetail: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
      marginTop: "16px",
    },
    TicketDetailTitle: {
      fontSize: "10px",
      color: "#2d2d2d",
      fontFamily: "Vazirmatn Light",
    },
    TicketDetailContent: {
      fontSize: "12px",
      color: "#000",
      fontFamily: "Vazirmatn Regular",
    },
  });
  return (
    <View style={style.TicketDetail}>
      <Text style={style.TicketDetailTitle}>{title}</Text>
      <Text style={style.TicketDetailContent}>{content}</Text>
    </View>
  );
};

export default TicketPdfDetail;
