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
        `https://project-2-api.herokuapp.com/videos/?api_key=76b4df0c-4116-4b68-acd9-d0a0d3a8426b`
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
