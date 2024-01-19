import './Videos.scss';
import Video from '../Video/Video';

const Videos = ({currentVideo, setVideoFunction}) => {

  return (
    <section className ="videos">
        <h2 className ="videos__title">NEXT VIDEOS</h2>
        <Video 
        currentVideo={currentVideo}
        setVideoFunction={setVideoFunction}
        />
    </section>
  );
}

export default Videos;