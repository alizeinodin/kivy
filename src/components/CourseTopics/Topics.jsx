const Topics = (props) => {
  return (
    <div className="bg-white w-52 h-52 rounded-lg text-center m-7 md:m-10 p-2 shadow-lg relative">
      <div className=""></div>
      <div
        className={`${props.backgroundColor} rounded-full w-20 h-20 absolute shadow-lg`} style={{'left': '3.8rem', 'top': '-2.5rem'}}
      >
        <img src={props.icon} className={"w-16 m-2"} />
      </div>
      <div className="m-4 mt-14 p-1.5">
        <h1 className="mb-4 font-semibold">سر فصل 1</h1>
        <p className="text-sm">اموزش مفاهیم اولیه فتوشاپ</p>
      </div>
    </div>
  );
};

export default Topics;
