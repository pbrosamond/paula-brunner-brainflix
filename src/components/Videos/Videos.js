import './Videos.scss';
import Video from '../Video/Video';

import videoData from '../../data/video-details.json';

const Videos = ({changeVideo, currentVideo}) => {

  return (
    <section className ="videos">
        <h2 className ="videos__title">NEXT VIDEOS</h2>
        <ul className ="videos-list">
          {videoData.map((video) => {
            return ( 
              video.image!==currentVideo &&
              <Video video={video} changeVideo={changeVideo}/>
            )
            })}
        </ul>
    </section>
  );
}

export default Videos;