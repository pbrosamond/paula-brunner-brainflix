import "./Hero.scss";

function Hero({ videoData }) {
  return (
    <section className="hero">
      <video
        className="hero__video"
        controls
        alt={videoData.title}
        poster={videoData.image}
      ></video>
    </section>
  );
}

export default Hero;
