import "./Video.scss";

import videoData from "../../data/video-details.json";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Video = ({ id }) => {
  const [ videoDetails, setVideoDetails ] = useState({})
  
  const fetchFullVideoDetails = async () => {
      const videoDetailsResponse = await axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=bd1e11cb-678d-4496-b971-9f9fb4fdae4e`)
      setVideoDetails(videoDetailsResponse.data)
  }

  useEffect(() => {
    
      const video = videoData.find ((item) => {
      return item.id === id;
    }); 
      setVideoDetails(video)
      // fetchFullVideoDetails();
  },[])

  return (

    <li className="video__alignment" key={videoDetails.image}>
    <div className="video__container">
      <Link to={`/${id}`}><img className="video__image" src={videoDetails.image} alt={videoDetails.title}></img></Link>
    </div>
    <div className="video__subcontainer">
      <Link to={`/${id}`}><p className="video__title">{videoDetails.title}</p></Link>
      <Link to={`/${id}`}><p className="video__author">{videoDetails.channel}</p></Link>
    </div>
  </li>
  )
}

export default Video;
