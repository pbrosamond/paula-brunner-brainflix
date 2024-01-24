import "./HomePage.scss";

import Hero from "../../components/Hero/Hero";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import Videos from "../../components/Videos/Videos";

import videoData from "../../data/video-details.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function HomePage() {
  const { videoId } = useParams();

  const [currentVideo, setVideo] = useState();
  const [currentVideoData, setVideoData] = useState()

  // const [currentVideo, setVideo] = useState(() => {
  //   return videoId?videoId:videoData[0].id;
  // });

  // const [currentVideoData, setVideoData] = useState(() => {
  //   const video = videoData.find((item) => {
  //     return item.id === currentVideo;
  //   });
  //   return video;
  // });

  useEffect(() => {
    console.log(videoId)
    setVideo(videoId?videoId:videoData[0].id)
    console.log(1, currentVideo)
    const video = videoData.find((item) => {
      return item.id === currentVideo;
    });
    setVideoData(video);
  },[videoId])


  if (currentVideo && currentVideoData) {
    return (
      <main>
        <Hero currentVideo={currentVideoData} />
        <section className="section">
          <div className="section__main">
            <Description currentVideo={currentVideoData} />
            <Comments comments={currentVideoData.comments} />
          </div>
          <Videos
            currentVideo={currentVideo}
          />
        </section>
      </main>
    );
  } else {
    return "";
  }
}

export default HomePage;
