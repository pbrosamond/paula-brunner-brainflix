import "./Videos.scss";
import Video from "../Video/Video";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link from react-router-dom

import axios from "axios";

const Videos = () => {
  const [videoList, setVideoList] = useState([]);
  const { videoId } = useParams();

  const fetchVideoList = async () => {
    const videoData = await axios.get(
      "https://project-2-api.herokuapp.com/videos?api_key=76b4df0c-4116-4b68-acd9-d0a0d3a8426b"
    );
    setVideoList(videoData.data);
  };

  useEffect(() => {
    fetchVideoList();
  }, [videoId]);

  const currentVideoId = videoList.find(
    (video) => video.id === (videoId || videoList[0].id)
  );

  return (
    <section className="videos">
      <h2 className="videos__title">NEXT VIDEOS</h2>
      <ul className="video">
        {videoList.map((video) => {
          if (video.id !== currentVideoId?.id) {
            return (
              <Link to={`/${video.id}`} key={video.id}>
                <Video id={video.id} />
              </Link>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default Videos;
