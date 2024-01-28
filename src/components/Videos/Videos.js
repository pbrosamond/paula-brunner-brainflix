import "./Videos.scss";
import Video from "../Video/Video";

const Videos = ({ videoData, currentVideoData }) => {
  return (
    <section className="videos">
      <h2 className="videos__title">NEXT VIDEOS</h2>
      <ul className="video">
        {videoData.map((video) => {
          if (video.id !== currentVideoData.id) {
            return <Video videoData={video} key={video.id} />;
          }
        })}
      </ul>
    </section>
  );
};

export default Videos;
