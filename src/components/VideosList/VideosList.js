import './VideosList.scss';

function VideosList() {
  return (
  <section class="videos-list">
    <div class="videos-list__container">
    <img class='videos-list__image' src="https://project-2-api.herokuapp.com/images/image1.jpg" alt="Next Video 1"></img>
    </div>
    <div class="videos-list__subcontainer">
      <p class="videos-list__title">Become A Travel Pro In One Easy Lesson</p>
      <p class="videos-list__author">Todd Welch</p>
    </div>
  </section>
  
  );
}

export default VideosList;