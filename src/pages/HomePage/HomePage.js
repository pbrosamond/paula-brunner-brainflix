import "./HomePage.scss";

import Hero from "../../components/Hero/Hero";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import Videos from "../../components/Videos/Videos";

import baseVideoData from "../../data/video-details.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function HomePage() {
  // Get the videoId from the router and name it as routeVideoId // Only works for object deconstruction.
  const {videoId: routeVideoId} = useParams();
  // Initialise state for the videoId and the videoData, with no default -
  // useEffect takes care of setting it up based on whether the route provided a videoId or not
  const [videoId, setVideoId] = useState();
  const [videoData, setVideoData] = useState();

  // Set up an effect to handle changes to the route
  // Only runs when the routeVideoId changes - because of [routeVideoId] as the second argument at the end
  // See: https://react.dev/reference/react/useEffect
  // Look for the second argument of "dependencies"
  useEffect(() => {
    // If there is a video ID from the route, use that
    if (routeVideoId) {
      setVideoId(routeVideoId);
      setVideoData(getVideoData(routeVideoId));
    }
    // Otherwise use the first video from the data file
    else {
      setVideoId(baseVideoData[0].id);
      setVideoData(getVideoData(baseVideoData[0].id));
    }
  }, [routeVideoId]);

  // Get video data for a videoId
  function getVideoData(videoId) {
    return baseVideoData.find((item) => item.id === videoId);
  }

  // Only render once the videoId and videoData have been established
  if (videoId && videoData) {
    return (
      <main>
        <Hero videoData={videoData} />
        <section className="section">
          <div className="section__main">
            <Description currentVideo={videoData} />
            <Comments comments={videoData.comments} />
          </div>
          <Videos currentVideoId={videoId}/>
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
