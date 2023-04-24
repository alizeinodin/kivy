import telephoneIcon from "../../imgs/tempimg/telephone.png";
import locationIcon from "../../imgs/tempimg/location.png";
import telegramIcon from "../../imgs/tempimg/telegram.png";
import emailIcon from "../../imgs/tempimg/email.png";

const Footer = () => {
  return (
    <div className="bg-secondaryColor text-white px-10 py-4" style={{'borderRadius':'6rem 6rem 0 0'}}>
      <div className="grid gride-cols-1 md:grid-cols-2">
        <div className="md:pt-10 md:pr-20">
          <p className="mb-10 text-lg">تیم کیوی</p>
          <p className="mb-10">
            تیمی متشکل از دانشجویان مهندسی کامپیوتر دانشگاه بوعلی سینا و علاقه
            مند به حوزه وب
          </p>
        </div>
        <div className="md:pt-10 md:pr-20">
            <p className="text-lg mb-10">راه‌های ازتباطی</p>
          <ul>
            <li className="flex items-center">
              <img src={telephoneIcon} className="w-9 m-4 ml-8" />
              <p>0812365945</p>
            </li>
            <li className="flex items-center">
              <img src={locationIcon} className="w-9 m-4 ml-8" />
              <p>همدان - دانشگاه بوعلی سینا</p>
            </li>
            <li className="flex items-center">
              <img src={telegramIcon} className="w-9 m-4 ml-8" />
              <p>@kivy</p>
            </li>
            <li className="flex items-center">
              <img src={emailIcon} className="w-9 m-4 ml-8" />
              <p>kivy@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-10">توسعه داده شده با 💚 در کیوی</p>
    </div>
  );
};

export default Footer;
