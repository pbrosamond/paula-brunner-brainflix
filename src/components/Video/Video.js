import "./Video.scss";
import { Link } from "react-router-dom";

const Video = ({ videoData }) => {
  return (
    <li className="video__alignment" key={videoData.image}>
      <div className="video__container">
        <Link to={`/${videoData.id}`}>
          <img
            className="video__image"
            src={videoData.image}
            alt={videoData.title}
          ></img>
        </Link>
      </div>
      <div className="video__subcontainer">
        <Link to={`/${videoData.id}`}>
          <p className="video__title">{videoData.title}</p>
        </Link>
          <p className="video__author">{videoData.channel}</p>
      </div>
    </li>
  );
};

export default Video;
