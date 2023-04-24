
const Details = (props) => {
    return <div className='flex w-48 mb-10 md:mb-0'>
        <img src={props.icon} className={`${props.backgroundColor} w-20 p-4 rounded-xl ml-4`}/>
        <div>
            <div className="text-lg font-bold">{props.title}</div>
            <div className="text-sm">{props.discription}</div>
        </div>
    </div>;
  };
  
  export default Details;
  