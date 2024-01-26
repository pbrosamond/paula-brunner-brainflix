import { useState, useEffect } from "react";
import "./Video.scss";
import { Link } from "react-router-dom";

const Video = ({ videoData: videoDetails }) => {

  return (
    <li className="video__alignment" key={videoDetails.image}>
      <div className="video__container">
        <Link to={`/${videoDetails.id}`}>
          <img
            className="video__image"
            src={videoDetails.image}
            alt={videoDetails.title}
          ></img>
        </Link>
      </div>
      <div className="video__subcontainer">
        <Link to={`/${videoDetails.id}`}>
          <p className="video__title">{videoDetails.title}</p>
        </Link>
        <Link to={`/${videoDetails.id}`}>
          <p className="video__author">{videoDetails.channel}</p>
        </Link>
      </div>
    </li>
  );
};

export default Video;
