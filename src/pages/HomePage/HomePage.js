import "./HomePage.scss";

import Hero from "../../components/Hero/Hero";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import Videos from "../../components/Videos/Videos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function HomePage() {
  // useParams calling a specific route
  const { videoId } = useParams();

  // useState to set default state for videoData and currentVideoData and pass props
  const [currentVideoData, setCurrentVideoData] = useState();

  // api get request from correct api location /video/:id for currentVideoData
  const fetchCurrentVideoData = async (videoId) => {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=76b4df0c-4116-4b68-acd9-d0a0d3a8426b`
      );
      setCurrentVideoData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchCurrentVideoData(videoId);
    } else {
      fetchCurrentVideoData("84e96018-4022-434e-80bf-000ce4cd12b8"); // Fallback to id of homepage video in case it cannot fetch a videoId.
    }
  }, [videoId]);

  if (currentVideoData) {
    return (
      <main>
        <Hero currentVideoData={currentVideoData} />
        <section className="section">
          <div className="section__main">
            <Description description={currentVideoData} />
            <Comments comments={currentVideoData.comments} />
          </div>
          <Videos currentVideoData={currentVideoData} videoId={videoId} />
        </section>
      </main>
    );
  }
  return "Loading HomePage";
}

export default HomePage;

// videoData should be in the video list component so it doesn't re-render twice. As low as you can go!
// videoData state is not as low as it can go
