import introIcon from "../../imgs/tempimg/abstract.png";
import basuImg from "../../imgs/tempimg/download.jpg";

const EventPlace = () => {
  return (
    <div className="px-7 md:px-28 pt-10 md:pt-16">
      <div className="flex items-center mb-8 md:mb-14">
        <img src={introIcon} className="w-4 h-4 ml-4" />
        <h2 className="text-2xl text-center">محل برگذاری دوره</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center px-4 xl:px-30">
        <img src={basuImg} className="rounded-full w-80 md:w-96 h-80 md:h-96" />
        {/* w-200 md:w-96 h-80 md:h-96 mb-10 */}
        <p className="text-center md:text-start md:mr-10 mt-10 font-semibold">
          دوره اموزشی فتوشاپ در ساختمان دانشکده مهندسی دانشگاه بوعلی سینا برگزار
          می‌شود.
        </p>
      </div>
    </div>
  );
};

export default EventPlace;
