import "./Videos.scss";
import Video from "../Video/Video";

const Videos = ({ videoList, currentVideoId }) => {
  return (
    <section className="videos">
      <h2 className="videos__title">NEXT VIDEOS</h2>
      <ul className="video">
        {videoList.map((videoData) => {
          if (videoData.id !== currentVideoId) {
            return (
                <Video videoData={videoData} key={videoData.id}/>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default Videos;
