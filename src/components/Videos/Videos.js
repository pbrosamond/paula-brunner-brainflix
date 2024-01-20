import "./Videos.scss";
import Video from "../Video/Video";

import videoData from "../../data/video-details.json";

const Videos = ({ currentVideo, setVideoFunction }) => {
  return (
    <section className="videos">
      <h2 className="videos__title">NEXT VIDEOS</h2>

      <ul className="video">
        {videoData.map((video) => {
          return (
            video.image !== currentVideo.image && (
              <Video
                key={video.id}
                video={video}
                setVideoFunction={setVideoFunction}
              />
            )
          );
        })}
      </ul>
    </section>
  );
};

export default Videos;
