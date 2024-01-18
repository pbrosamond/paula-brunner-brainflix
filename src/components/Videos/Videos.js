import './Videos.scss';
import VideosList from '../VideosList/VideosList';

function Videos() {
  return (
    <section class="videos">
        <h2 class="videos__title">NEXT VIDEOS</h2>
        <VideosList />
    </section>
  );
}

export default Videos;