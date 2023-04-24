import {
  View,
  Text,
  Image,
  Document,
  Page,
  StyleSheet,
} from "@react-pdf/renderer";
const TicketPdf = () => {
  return (
    <Document>
      <Page size={"A4"}>
        <View className="ticket">
          <View className="ticket-header">
            {/* <Image className="ticket-header-img" /> */}
            <View className="ticket-header-content">
              <Text className="ticket-header-title">بلیط حضور در</Text>
              <Text className="ticket-header-heading">دوره آموزش فتوشاپT</Text>
            </View>
          </View>
          {/* --------------------------------------------------- */}
          <View className="ticket-detail"></View>
          {/* --------------------------------------------- */}
          <View className="ticket-line"></View>
          {/* --------------------------------------------------- */}

          <View className="ticket-barcode">
            {/* <Image src="" alt="" className="ticket-barcode-img" /> */}
            <View className="ticket-barcode-code">
              <Text>کد رهگیری ثبت نام</Text>
              <View className="barcode">
                <Text> 12358746985325 </Text>
                {/* icon for copy */}
              </View>
            </View>
          </View>
          {/* --------------------------------------------------- */}
        </View>
      </Page>
    </Document>
  );
};

export default TicketPdf;
