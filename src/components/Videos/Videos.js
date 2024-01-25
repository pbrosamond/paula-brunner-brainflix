import "./Videos.scss";
import Video from "../Video/Video";

import videoData from "../../data/video-details.json";

import axios from 'axios';

const Videos = ({currentVideoId}) => {

// const fetchVideo = async() => {
//     const videoData = await axios.get("https://project-2-api.herokuapp.com/videos?api_key=bd1e11cb-678d-4496-b971-9f9fb4fdae4e")
//     setVideos(videoData.data)
// }

    return (
        <section className="videos">
            <h2 className="videos__title">NEXT VIDEOS</h2>
            <ul className="video">
                {videoData.map(video => {
                    if (video.id !== currentVideoId) {
                        return (<Video
                            key={video.id}
                            videoData={video}
                        />)
                    }
                })}
            </ul>
        </section>
    )
}

export default Videos;

