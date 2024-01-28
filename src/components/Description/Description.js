import "./Description.scss";
import viewsIcon from "../../assets/images/Icons/views.svg";
import likesIcon from "../../assets/images/Icons/likes.svg";
import { formatTimestamp } from "../../utils/utils";

function Description({ description }) {
  return (
    <section className="description">
      <h1 className="description__title">{description.title}</h1>
      <div className="description__items">
        <div className="description__container">
          <p className="description__author">{description.channel}</p>
          <p className="description__details">
            {formatTimestamp(description.timestamp)}
          </p>
        </div>
        <div className="description__container">
          <div className="description__subcontainer">
            <img src={viewsIcon} alt="Eye Icon"></img>
            <p className="description__details">{description.views}</p>
          </div>
          <div className="description__subcontainer">
            <img src={likesIcon} alt="Eye Icon"></img>
            <p className="description__details">{description.likes}</p>
          </div>
        </div>
      </div>
      <p className="description__text">{description.description}</p>
    </section>
  );
}
export default Description;
