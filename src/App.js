import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Description from "./components/Description/Description";
import Comments from "./components/Comments/Comments";
import Videos from "./components/Videos/Videos";

import videoData from "./data/video-details.json";
import { useState } from "react";

import "./App.scss";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="upload" element={<VideoUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
