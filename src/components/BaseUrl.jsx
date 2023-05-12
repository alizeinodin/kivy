import axios from "axios";

const BaseUrl=axios.create({
  baseURL:'https://kiwi.ssceb.ir/api'
})
// function BaseUrl() {
//   const baseUrl = ``;
//   return baseUrl;
// }

export default BaseUrl;
