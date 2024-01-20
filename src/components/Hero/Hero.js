import "./Hero.scss";

function Hero({ currentVideo }) {
  return (
    <section className="hero">
      <video
        className="hero__video"
        width="100%"
        height="auto"
        controls
        alt={currentVideo.title}
        poster={currentVideo.image}
      ></video>
    </section>
  );
}

export default Hero;
