import "./Videos.scss";
import Video from "../Video/Video";

import videoData from "../../data/video-details.json";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Videos = () => {

const [ videos, setVideo ] = useState([]);
const { videoId } = useParams();

const fetchVideo = async() => {
    const videoData = await axios.get("https://project-2-api.herokuapp.com/videos?api_key=bd1e11cb-678d-4496-b971-9f9fb4fdae4e")
    setVideo(videoData.data)
}

useEffect(() => {
    fetchVideo();
},[])

console.log('update video list');

const currentImage = videos.find(video => video.id === (videoId || videos[0].id))

return (  
    <section className="videos">
      <h2 className="videos__title">NEXT VIDEOS</h2>

      <ul className="video">
        {videos.map(video => 
            <Video 
              key={video.id}
              id={video.id}
              video={video}
              setVideo={setVideo}   
            />
        )}
      </ul>
    </section>
)
}

export default Videos;

