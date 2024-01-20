import './Video.scss';

const Video = ({video, setVideoFunction}) => {

  return (
      <li className ="video__alignment" 
        key={video.image} 
        onClick={() => setVideoFunction(video)}
        >
        <div className ="video__container">
          <img className ='video__image' src={ video.image } alt={ video.title }></img>
        </div>
        <div className ="video__subcontainer">
          <p className ="video__title">{ video.title }</p>
          <p className ="video__author">{ video.channel }</p>
        </div>
      </li>
  );
}

  export default Video;