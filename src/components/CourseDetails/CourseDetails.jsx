import groupIcon from '../../imgs/tempimg/group.png'
import timeIcon from '../../imgs/tempimg/back-in-time.png'
import seriseIcon from '../../imgs/tempimg/series.png'

import Details from "./Details";

const CourseDetails = () => {
  return <div className="grid grid-cols-1 md:grid-cols-3 p-10 justify-items-center">
    <Details title='+10 نفر' discription='دانشجو تا کنون ثبت نام کرده اند.' icon={groupIcon} backgroundColor='bg-primaryColor ' />
    <Details title='8 درس' discription='میانگین تعداد دروس دوره' icon={seriseIcon} backgroundColor='bg-cyan-300' />
    <Details title='5 ساعت' discription='میانگین تعداد ساعت دوره' icon={timeIcon} backgroundColor='bg-violet-400' />
  </div>;
};

export default CourseDetails;
