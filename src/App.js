import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Comments from './components/Comments/Comments';
import Videos from './components/Videos/Videos';
import './App.scss';

function App() {
  return ( 
    <main>
      <Header />
      <Hero />
      <section class="section">
        <div class="section__main">
          <Description />
          <Comments />
        </div>
        <Videos />
      </section>
    </main>
  );
}

export default App;
