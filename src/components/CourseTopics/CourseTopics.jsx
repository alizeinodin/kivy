import Topics from "./Topics";
import introIcon from "../../imgs/tempimg/abstract.png";
import seriseIcon from "../../imgs/tempimg/series.png";
import timeIcon from "../../imgs/tempimg/back-in-time.png";
import groupIcon from '../../imgs/tempimg/group.png'
import toolsIcon from '../../imgs/tempimg/tools.png'
import websIcon from '../../imgs/tempimg/web-design.png'
import bullhornIcon from '../../imgs/tempimg/bullhorn.png'


const CourseTopics = () => {
  return (
    <div className="p-10 md:pt-16">
      <div className="flex items-center justify-center mb-8 pt-10">
        <img src={introIcon} className="w-4 h-4 ml-4" />
        <h2 className="text-2xl text-center">سر فصل دوره ها</h2>
      </div>
      <div className='px-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center'>
        <Topics icon={timeIcon} backgroundColor="bg-violet-400" />
        <Topics icon={websIcon} backgroundColor="bg-cyan-300" />
        <Topics icon={toolsIcon} backgroundColor="bg-primaryColor" />
        <Topics icon={groupIcon} backgroundColor="bg-teal-300" />
        <Topics icon={seriseIcon} backgroundColor="bg-pink-500" />
        <Topics icon={bullhornIcon} backgroundColor="bg-orange-500" />
      </div>
    </div>
  );
};

export default CourseTopics;
