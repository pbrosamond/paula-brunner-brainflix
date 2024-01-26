import "./HomePage.scss";

import Hero from "../../components/Hero/Hero";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import Videos from "../../components/Videos/Videos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function HomePage() {
  // Get the videoId from the router and name it as routeVideoId // Only works for object deconstruction.
  const { videoId: routeVideoId } = useParams();
  // Initialise state for the videoId and the videoData, with no default -
  // useEffect takes care of setting it up based on whether the route provided a videoId or not
  const [videoId, setVideoId] = useState();
  const [videoData, setVideoData] = useState();
  const [videoList, setVideoList] = useState();

  const fetchVideoList = async () => {
    const videoList = await axios.get(
      "https://project-2-api.herokuapp.com/videos?api_key=76b4df0c-4116-4b68-acd9-d0a0d3a8426b"
    );
    console.log(videoList.data);
    setVideoList(videoList.data);
  };

  useEffect(() => {
    fetchVideoList();
  }, []);

  // Set up an effect to handle changes to the route
  // Only runs when the routeVideoId changes - because of [routeVideoId] as the second argument at the end
  // See: https://react.dev/reference/react/useEffect
  // Look for the second argument of "dependencies"
  useEffect(() => {
    if (!videoList) {
      return;
    }

    (async () => {
      // If there is a video ID from the route, use that
      if (routeVideoId) {
        setVideoId(routeVideoId);
        setVideoData(await getVideoData(routeVideoId));
      }
      // Otherwise use the first video from the data file
      else {
        setVideoId(videoList[0].id);
        setVideoData(await getVideoData(videoList[0].id));
      }
    })();
  }, [routeVideoId, videoList]);

  // Get video data for a videoId
  async function getVideoData(videoId) {
    const video = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=76b4df0c-4116-4b68-acd9-d0a0d3a8426b`
    );
    return video.data;
  }

  // Only render once the videoId and videoData have been established
  if (videoList && videoId && videoData) {
    return (
      <main>
        <Hero videoData={videoData} />
        <section className="section">
          <div className="section__main">
            <Description currentVideo={videoData} />
            <Comments comments={videoData.comments} />
          </div>
          <Videos currentVideoId={videoId} videoList={videoList} />
        </section>
      </main>
    );
  }
  // Otherwise render nothing
  else {
    return "";
  }
}

export default HomePage;
