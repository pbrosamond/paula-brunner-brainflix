import './Video.scss';
import videoData from '../../data/video-details.json';

const Video = ({id, setVideoFunction, currentVideo}) => {

  return (

    <ul className="video">

    {videoData.map((video) => {

      return ( 
        video.id!==currentVideo.id &&
        
      <li key={id} className ="video__alignment" onClick={() => setVideoFunction(video)}> 

        <div className ="video__container">
          <img className ='video__image' src={ video.image } alt={ video.title }></img>
        </div>

        <div className ="video__subcontainer">
          <p className ="video__title">{ video.title }</p>
          <p className ="video__author">{ video.channel }</p>
        </div>

        </li>
      )})}

      </ul>
      )}

  export default Video;