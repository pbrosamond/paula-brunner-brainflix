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
  const [videoData, setVideoData] = useState();
  const [currentVideoData, setCurrentVideoData] = useState();

  // api get request from correct api location /video for videoData
  const fetchVideoData = async () => {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/?api_key=76b4df0c-4116-4b68-acd9-d0a0d3a8426b`
      );
      setVideoData(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  // api get request from correct api location /video/:id for currentVideoData
  const fetchCurrentVideoData = async (id) => {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=76b4df0c-4116-4b68-acd9-d0a0d3a8426b`
      );
      setCurrentVideoData(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getDefaultVideoData = async () => {
    try {
      const response = await fetchVideoData(); // first, fetch the list of data
      fetchCurrentVideoData(response[0].id); // fetch detail by passing in the first item's id
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchVideoData();
      fetchCurrentVideoData(videoId);
    } else {
      getDefaultVideoData();
    }
  }, [videoId]);

  if (videoData && currentVideoData) {
    return (
      <main>
        <Hero videoData={currentVideoData} />
        <section className="section">
          <div className="section__main">
            <Description description={currentVideoData} />
            <Comments comments={currentVideoData.comments} />
          </div>
          <Videos currentVideoData={currentVideoData} videoData={videoData} />
        </section>
      </main>
    );
  }
  return "";
}

export default HomePage;
