import "./NotFound.css";
import image from "./../../imgs/404.svg";
const NotFound = () => {
  return (
    <div className="NotFound-container">
      
      <p className="NotFound-text">متاسفیم دوره مورد نظر شما وجود ندارد !</p>
      <img src={image} alt="404" className="NotFound-image" />
    </div>
  );
};

export default NotFound;
