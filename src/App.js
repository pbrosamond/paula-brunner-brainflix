import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Comments from './components/Comments/Comments';
import Videos from './components/Videos/Videos';

import videoData from './data/video-details.json';
import { useState } from 'react';

import './App.scss';

function App() {

  const [currentVideo, setVideo] = useState(videoData[0])

  const setVideoFunction = (clickedVideo) => {
    setVideo(clickedVideo)
  };

  return ( 
    <main>
      <Header />
      <Hero 
      currentVideo={currentVideo}
      />
      <section className ="section">
        <div className ="section__main">
          <Description 
          currentVideo={currentVideo}
          />
          <Comments />
        </div>
        <Videos 
        setVideoFunction={setVideoFunction}
        currentVideo={currentVideo}
        />
      </section>
    </main>
  );
}

export default App;
