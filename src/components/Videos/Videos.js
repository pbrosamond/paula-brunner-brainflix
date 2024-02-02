import "./Videos.scss";
import Video from "../Video/Video";
import { useState, useEffect } from "react";
import axios from "axios";

const Videos = ({ currentVideoData }) => {
  const [videoData, setVideoData] = useState();

  // api get request from correct api location /video for videoData
  const fetchVideoData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/videos/`
      );
      setVideoData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  if (videoData) {
    return (
      <section className="videos">
        <h2 className="videos__title">NEXT VIDEOS</h2>
        <ul className="video">
          {videoData.map((video) => {
            return (
              video.id !== currentVideoData.id && (
                <Video video={video} key={video.id} />
              )
            );
          })}
        </ul>
      </section>
    );
  }
  return "";
};

export default Videos;
