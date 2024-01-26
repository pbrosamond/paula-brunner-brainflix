import "./Videos.scss";
import Video from "../Video/Video";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


const Videos = ({videoList, currentVideoId}) => {

  return (
    <section className="videos">
      <h2 className="videos__title">NEXT VIDEOS</h2>
      <ul className="video">
        {videoList.map((videoData) => {
          if (videoData.id !== currentVideoId) {
            return (
              <Link to={`/${videoData.id}`} key={videoData.id}>
                <Video videoData={videoData} />
              </Link>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default Videos;
