import "./Video.scss";
import { Link } from "react-router-dom";
// import axios from "axios";

const Video = ({ videoData }) => {
  // const fetchFullVideoDetails = async () => {
  //     const videoDetailsResponse = await axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=bd1e11cb-678d-4496-b971-9f9fb4fdae4e`)
  //     setVideoDetails(videoDetailsResponse.data)
  // }

  return (

    <li className="video__alignment" key={videoData.image}>
    <div className="video__container">
      <Link to={`/${videoData.id}`}><img className="video__image" src={videoData.image} alt={videoData.title}></img></Link>
    </div>
    <div className="video__subcontainer">
      <Link to={`/${videoData.id}`}><p className="video__title">{videoData.title}</p></Link>
      <Link to={`/${videoData.id}`}><p className="video__author">{videoData.channel}</p></Link>
    </div>
  </li>
  )
}

export default Video;
