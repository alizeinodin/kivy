import introIcon from "../../imgs/tempimg/abstract.png";
import introImg from "../../imgs/tempimg/400x500 (3).png";
const CourseIntroduction = () => {
  return (
    <div className="md:py-10 px-4 md:px-28">
      <div className="flex items-center">
        <img src={introIcon} className="w-4 h-4 ml-4" />
        <h2 className="text-2xl">معرفی دوره</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center p-4 md:p-7 relative">
        <p className="mt-4 text-lg">
          رویکرد نوین مدیریت منابع انسانی، کارکنان را سرمایه‌ی هر سازمان می‌داند
          و موفق‌ترین سازمان‌ها آن‌هایی هستند که بتوانند افراد توانمند را جذب‌
          کنند، پرورش دهند و حفظ نمایند. در این مسیر یکی از مهم‌ترین مسئولیت
          متخصصین مدیریت منابع انسانی، یافتن افراد مستعد و جذب آن‌هاست. این
          دوره‌ی آموزشی با محوریت کسب مهارت‌های‌ لازم برای فعالیت در حوزه «جذب و
          استخدام» طراحی شده است؛ به این صورت که در ابتدا با نقش مدیریت منابع
          انسانی در سازمان آشنا می‌شویم، اهمیت وجود آن و مهارت‌های مورد نیاز
          برای فعالیت در این حوزه را درک می‌کنیم. در ادامه‌ی مسیر سراغ
          زیرساخت‌های جذب رفته، تحلیل موقعیت‌های شغلی و شیوه‌ی طراحی شرح شغل را
          یاد می‌گیریم.
        </p>
        <div className="bg-primaryColor rounded-full p-4 w-80 h-80 mt-20 md:mt-0 md:mt-0">
          <img src={introImg} className="w-60 my-0 mx-8" />
        </div>
      </div>
    </div>
  );
};

export default CourseIntroduction;
