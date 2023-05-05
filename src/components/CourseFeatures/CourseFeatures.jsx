import introIcon from "../../imgs/tempimg/abstract (1).png";
import Features from "./Features";
import supportIcon from "../../imgs/tempimg/support.png";
import bluePrintIcon from "../../imgs/tempimg/blueprint (1).png";
import oneHandredIcon from "../../imgs/tempimg/100.png";
const CourseFeatures = () => {
  return (
    <div className="pt-10 pb:8 md:pb-16">
      <div className="flex items-center justify-center mb-8">
        <img src={introIcon} className="w-4 h-4 ml-4" />
        <h2 className="text-lg text-center text-white">ویژگی های دوره</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
        <Features title="دارای پشتیبانی" icon={supportIcon} />
        <Features title="پروژه محور" icon={bluePrintIcon} />
        <Features title="صفر تا صد" icon={oneHandredIcon} />
      </div>
    </div>
  );
};

export default CourseFeatures;
