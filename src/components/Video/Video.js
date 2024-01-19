import './Video.scss';

const Video = ({video, changeVideo}) => {

  return (

    
      <li className ="videos-list__alignment" 
        key={video.image} 
        onClick={() => changeVideo({
          image: video.image,
          title: video.title,
          channel: video.channel})}
        >
        <div className ="videos-list__container">
          <img className ='videos-list__image' src={ video.image } alt="Next Video 1"></img>
        </div>
        <div className ="videos-list__subcontainer">
          <p className ="videos-list__title">{ video.title }</p>
          <p className ="videos-list__author">{ video.channel }</p>
        </div>
      </li>
  );
}

  export default Video;