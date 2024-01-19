import './Video.scss';
import videoData from '../../data/video-details.json';

const Video = ({id, setVideoFunction, currentVideo}) => {

  return (

    <ul class="videos-list">

    {videoData.map((video) => {

      return ( 
        video.id!==currentVideo.id &&
        
      <li key={id} className ="videos-list__alignment" onClick={() => setVideoFunction(video)}> 

        <div className ="videos-list__container">
          <img className ='videos-list__image' src={ video.image } alt={ video.title }></img>
        </div>

        <div className ="videos-list__subcontainer">
          <p className ="videos-list__title">{ video.title }</p>
          <p className ="videos-list__author">{ video.channel }</p>
        </div>

        </li>
      )})}
      </ul>
      )}

  export default Video;