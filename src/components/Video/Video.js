import { useState, useEffect } from "react";
import "./Video.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Video = ({ id }) => {
  const [videoDetails, setVideoDetails] = useState({});

  const fetchFullVideoDetails = async () => {
    try {
      const videoDetailsResponse = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=76b4df0c-4116-4b68-acd9-d0a0d3a8426b`
      );
      setVideoDetails(videoDetailsResponse.data);
    } catch (error) {
      // Handle the error, for example, log it or set a default value for videoDetails
      console.error("Error fetching video details:", error);
    }
  };

  useEffect(() => {
    fetchFullVideoDetails();
  }, []);

  return (
    <li className="video__alignment" key={videoDetails.image}>
      <div className="video__container">
        <Link to={`/${id}`}>
          <img
            className="video__image"
            src={videoDetails.image}
            alt={videoDetails.title}
          ></img>
        </Link>
      </div>
      <div className="video__subcontainer">
        <Link to={`/${id}`}>
          <p className="video__title">{videoDetails.title}</p>
        </Link>
        <Link to={`/${id}`}>
          <p className="video__author">{videoDetails.channel}</p>
        </Link>
      </div>
    </li>
  );
};

export default Video;
