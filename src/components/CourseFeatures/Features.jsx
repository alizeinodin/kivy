
const Features = (props) => {
  return (
    <div className="bg-white p-6 rounded-lg w-40 flex flex-col items-center mb-10 md:mb-0">
      <img src={props.icon} className="w-16 object-center mb-4" />
      <p className="font-medium text-zinc-800">{props.title}</p>
    </div>
  );
};

export default Features;
