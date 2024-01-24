import './HomePage.scss';

import Hero from "../../components/Hero/Hero";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import Videos from "../../components/Videos/Videos";

import videoData from "../../data/video-details.json";
import { useState } from "react";

function HomePage() {
  const [currentVideo, setVideo] = useState(videoData[0]);

  const setVideoFunction = (clickedVideo) => {
    setVideo(clickedVideo);
  };

  return (
    <main>
      <Hero currentVideo={currentVideo}/>
      <section className="section">
        <div className="section__main">
          <Description currentVideo={currentVideo}/>
          <Comments comments={currentVideo.comments}/>
        </div>
        <Videos setVideo={setVideo} currentVideo={currentVideo}/>
      </section>
    </main>
  );
}

export default HomePage;