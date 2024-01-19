import './Hero.scss';

function Hero({image}) {

    return (
        <section className ="hero">
            <video className ="hero__video" width="100%" height="auto" controls alt="BMX Rampage Video" poster={image}></video>
        </section>
    );
  }
  
  export default Hero;