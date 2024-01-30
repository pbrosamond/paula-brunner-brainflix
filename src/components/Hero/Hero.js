import "./Hero.scss";

function Hero({ currentVideoData }) {
  return (
    <section className="hero">
      <video
        className="hero__video"
        controls
        alt={currentVideoData.title}
        poster={currentVideoData.image}
      ></video>
    </section>
  );
}

export default Hero;
