import './Hero.scss';

function Hero({currentVideo}) {

    return (
        <section className ="hero">
            <video className ="hero__video" width="100%" height="auto" controls alt="BMX Rampage Video" poster={currentVideo.image}></video>
        </section>
    );
  }
  
  export default Hero;