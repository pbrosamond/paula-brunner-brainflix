import "./Hero.scss";

function Hero({ currentVideo }) {
  return (
    <section className="hero">
      <video
        className="hero__video"
        controls
        alt={currentVideo.title}
        poster={currentVideo.image}
      ></video>
    </section>
  );
}

export default Hero;
