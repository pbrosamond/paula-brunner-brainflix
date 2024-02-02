import "./Video.scss";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
  return (
    <li className="video__alignment">
      <div className="video__container">
        <Link to={`/${video.id}`}>
          <img
            className="video__image"
            src={video.image}
            alt={video.title}
          ></img>
        </Link>
      </div>
      <div className="video__subcontainer">
        <Link to={`/${video.id}`}>
          <p className="video__title">{video.title}</p>
        </Link>
        <p className="video__author">{video.channel}</p>
      </div>
    </li>
  );
};

export default Video;
