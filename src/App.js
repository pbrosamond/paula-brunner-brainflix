import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Comments from './components/Comments/Comments';
import Videos from './components/Videos/Videos';

import videoData from './data/video-details.json';

import { useState } from 'react';

import './App.scss';

function App() {

  const [video, setVideo] = useState(videoData[0])

  return ( 
    <main>
      <Header />
      <Hero 
      image = {video.image}
      />
      <section className ="section">
        <div className ="section__main">
          <Description />
          <Comments />
        </div>
        <Videos 
        changeVideo={setVideo}
        currentVideo={video.image}
        />
      </section>
    </main>
  );
}

export default App;
